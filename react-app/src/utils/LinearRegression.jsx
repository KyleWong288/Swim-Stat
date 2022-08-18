// Contains utility functions for regression

// const testYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022]
// const testTimes = ["2:12.22", "1:00.86", "1:01.50", "59.50", "50.90", "49.60", "9.00"]

// Input: array of times (string). Output: array of converted doubles
export function timesToNum(times) {
    const res = [];
    for (let i=0; i<times.length; i++) {
        const word = times[i];
        let curr = 0.0;
        const colon = word.search(":");
        if (colon === -1) {
            curr += parseFloat(word);
        }
        else {
            curr += 60 * parseFloat(word.substring(0,colon)); // add minutes
            curr += parseFloat(word.substring(colon+1, word.length)); // add seconds
        }
        res.push(curr);
    }
    return res;
}

// Input: array of times (double). Output: array of converted strings
export function numToTimes(times) {
    const res = [];
    for (let i=0; i<times.length; i++) {
        // let currNum = (Math.round(times[i] * 100) / 100).toFixed(2);
        let currNum = Number(times[i]);
        let minutes = 0;
        while (currNum >= 60.00) {
            minutes += 1;
            currNum -= 60.00;
        }
        let currWord = "";
        let min = (Math.round(currNum * 100) / 100).toFixed(2);
        if (minutes > 0) {
            if (min.length < 5) {
                currWord += minutes.toString() + ":0" + min;
            }
            else {
                currWord += minutes.toString() + ":" + min;
            }
            
        }
        else {
            if (min.length < 5) {
                currWord += "0" + min;
            }
            else {
                currWord += min;
            }
            
        }
        res.push(currWord);
    }
    return res;
}

// Input: array of years. Output: array of years centered around 1
export function centerYears(years) {
    const res = [];
    for (let i=0; i<years.length; i++) {
        res[i] = years[i];
    }
    const min = Math.min.apply(Math, res) - 1;
    for (let i=0; i<res.length; i++) {
        res[i] -= min;
    }
    return res;
}

// Input: years (int) and times (double). Output: augmented 3x4 matrix of polynomial regression summations.
// PROBLEMATIC: Any polynomial regression is cringe since it only fits to current data with no regard to future data.
/*
export function createMatrix(years, times) {
    const matrix = [];
    let sumX = sumX2 = sumX3 = sumX4 = sumY = sumXY = sumX2Y = 0.0;     <- make these lvalues or array method
    for (let i=0; i<years.length; i++) {
        sumX += years[i];
        sumX2 += Math.pow(years[i], 2);
        sumX3 += Math.pow(years[i], 3);
        sumX4 += Math.pow(years[i], 4);
        sumY += times[i];
        sumXY += years[i] * times[i];
        sumX2Y += Math.pow(years[i], 2) * times[i];
    }
    // regression matrix of summations based on formula
    matrix.push([years.length, sumX, sumX2, sumY]);
    matrix.push([sumX, sumX2, sumX3, sumXY]);
    matrix.push([sumX2, sumX3, sumX4, sumX2Y]);
    return matrix;
}
*/

// Input: years (int) and times (double). Output: augmented 2x3 matrix of logarithmic regression summations.
// More optimal/realistic than polynomial regression 
export function createMatrixLog(years, times) {
    const matrix = [];
    let sumLnX = 0;
    let sumLnX2 = 0;
    let sumY = 0;
    let sumLnXY = 0;
    for (let i=0; i<years.length; i++) {
        sumLnX += Math.log(years[i]);
        sumLnX2 += Math.pow(Math.log(years[i]), 2);
        sumY += times[i];
        sumLnXY += Math.log(years[i]) * times[i];
    }
    // regression matrix of summations based on formula
    matrix.push([years.length, sumLnX, sumY]);
    matrix.push([sumLnX, sumLnX2, sumLnXY]);
    return matrix;
}

// Input: matrix (double). Output: array of coefficients (double). Only solves augmented square matrices.
export function solveMatrix(matrixData) {
    const matrix = matrixData;
    const size = matrix.length;
    // gaussian elimination
    for (let i=0; i<size-1; i++) {
        for (let j=i+1; j<size; j++) {
            let constant = matrix[j][i] / matrix[i][i];
            matrix[j][i] = 0;
            for (let k=i+1; k<size+1; k++) {
                matrix[j][k] -= (constant * matrix[i][k]);
            }
        }
    }
    // normalize and back substitution
    for (let i=size-1; i>=0; i--) {
        matrix[i][size] /= matrix[i][i];
        matrix[i][i] = 1.0;
        for (let j=i-1; j>=0; j--) {
            matrix[j][size] -= (matrix[j][i] * matrix[i][size]);
            matrix[j][i] = 0;
        }
    }
    const res = [];
    // truncate decimals to 8 places
    for (let i=0; i<size; i++) {
        matrix[i][size] = Number(matrix[i][size].toFixed(8));
        res.push(matrix[i][size]);
    }
    return res;
}

// Input: Original years/times data, array of regression coefficients. 
// Output: Appends future 3 data points. Returns Years (int array) and Times (string array).
export function createResData(years, times, coefficients) {
    const b0 = coefficients[0];
    const b1 = coefficients[1];
    const minYear = Math.min.apply(Math, years) - 1;
    years = centerYears(years);
    for (let i=0; i<3; i++) {
        years.push(years[years.length-1]+1);
    }
    for (let i=years.length-3; i<years.length; i++) {
        let newTime = b0 + b1 * Math.log(years[i]);
        times.push(newTime.toFixed(2));
    }
    // re-center data around original years
    for (let i=0; i<years.length; i++) {
        years[i] += minYear;
    }
    // convert times to strings and formats 2 decimal places
    times = numToTimes(times);
    const res = [years, times];
    return res;
}

// exportable function, returns years array and times array
export default function linearRegression(yearsData, timesData) {
    const years = centerYears(yearsData);
    const times = timesToNum(timesData); 
    const matrix = createMatrixLog(years, times);
    const coefficients = solveMatrix(matrix);
    const res = createResData(yearsData, times, coefficients);
    return res;
}

// linearRegression(testYears, testTimes);

