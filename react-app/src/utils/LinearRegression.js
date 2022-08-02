// Contains utility functions for regression

const testYears = [2017, 2018, 2019, 2020, 2021];
const testTimes = ["59.00", "59.10", "58.60", "58.50", "58.45"];

// Input: array of times (string). Output: array of converted doubles
function timesToNum(times) {
    const res = [];
    for (let i=0; i<times.length; i++) {
        const word = times[i];
        let curr = 0.0;
        const colon = word.search(":");
        if (colon == -1) {
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

// Input: array of years. Output: array of years centered around 1
function centerYears(years) {
    const res = years;
    const min = Math.min.apply(Math, res) - 1;
    for (let i=0; i<res.length; i++) {
        res[i] -= min;
    }
    return res;
}

// Input: years (int) and times (double). Output: augmented 3x4 matrix of polynomial regression summations.
// PROBLEMATIC: Any polynomial regression is problematic since it only fits current data with no regard to future data.
function createMatrix(years, times) {
    const matrix = [];
    let sumX = sumX2 = sumX3 = sumX4 = sumY = sumXY = sumX2Y = 0.0;
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

// Input: years (int) and times (double). Output: augmented 2x3 matrix of logarithmic regression summations.
// More optimal/realistic than polynomial regression
function createMatrixLog(years, times) {
    const matrix = [];
    let sumLnX = sumLnX2 = sumY = sumLnXY = 0;
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

// Input: matrix (double). Output: array of coefficients. Only solves augmented square matrices.
function solveMatrix(matrixData) {
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
        matrix[i][size] = matrix[i][size].toFixed(8);
        res.push(matrix[i][size]);
    }
    // for (let i=0; i<res.length; i++) {
    //     console.log(res[i]);
    // }
    // for (let i=0; i<size; i++) {
    //     for (let j=0; j<matrix[0].length; j++) {
    //         console.log(matrix[i][j] + " ");
    //     }
    //     console.log();
    // }
    return res;
}

// exportable function, returns array of coefficients
function linearRegression(yearsData, timesData) {
    const years = centerYears(yearsData);
    const times = timesToNum(timesData); 
    const matrix = createMatrixLog(years, times);
    const res = solveMatrix(matrix);
    return res;
}

console.log(linearRegression(testYears, testTimes));
