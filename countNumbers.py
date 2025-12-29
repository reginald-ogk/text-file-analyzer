def main():
    raw = input("Enter numbers separated by spaces: ")
    parts = raw.split()

    count = 0
    for _ in parts: # _ 
        count = count + 1  # or count += 1
    print("Total numbers.", count)

main()