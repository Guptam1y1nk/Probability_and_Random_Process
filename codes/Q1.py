import numpy as np                       #Importing numpy
<<<<<<< HEAD
import matplotlib.pyplot as plt         
=======
>>>>>>> 0f94fb650ee085f618cc7669b10c16dd22520923
A = np.array([[1,1],[5,-7]])             #Defining the vector A
B = np.array([2,20])                     #Defining the vector B
x = np.linalg.solve(A,B)                 #applying linalg.solve to find x such that Ax=B
print(x)                                 #printing the solution of equation Ax=B 
<<<<<<< HEAD


# Coordinates of the point
x_point = 17/6
y_point = -5/6

# Define the lines' equations
x_line = np.linspace(-2, 3, 400)  # Generate x values from -2 to 3
y_line = 2 - x_line
y_equation = (5 * x_line - 20) / 7

# Create a new figure
#plt.figure()

# Plot the point using a red 'x' marker
plt.plot(x_point, y_point, 'bx', label='H (17/6, -5/6)')

# Plot the lines
plt.plot(x_line, y_line, label='y = 2 - x')
plt.plot(x_line, y_equation, label='7y = 5x - 20')

# Set labels for the axes
plt.xlabel('X-axis')
plt.ylabel('Y-axis')

# Set the title of the plot
plt.title('Plotting Point and Lines')

# Add a legend
plt.legend()

# Add text label "H" at the specified point
plt.text(x_point, y_point, 'H', fontsize=12, verticalalignment='bottom')

# Display the plot
plt.grid(True)
plt.show()

=======
>>>>>>> 0f94fb650ee085f618cc7669b10c16dd22520923
