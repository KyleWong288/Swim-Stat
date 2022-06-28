import numpy as np

def make_x_and_y(n):
    x = np.random.randn(n)
    y = np.random.randn(n)
    return x, y

x, y = make_x_and_y(5)
print(x)
print(y)