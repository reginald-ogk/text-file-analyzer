'''name = input("Enter your name: ")

while name == "": # Check if the input is empty
    print("Name cannot be empty. Please enter your name.")
    name = input("Enter your name: ")

print(f"Hello, {name}!")'''    #[ This code is commented out to focus on the while loop example below , comments can be removed to activate it ]


count = 0
while True:  
    print(f"Count is: {count}")   

    if count >= 6:  
        break # Exit the loop when count reaches 5

    count += 0.5 