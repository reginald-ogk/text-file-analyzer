import os

folder = input("Enter the folder path: ")
if not os.path.isdir(folder):
    print("Invalid folder path.")
    exit()

file_count = 0
total_lines = 0
total_words = 0
total_chars = 0

for filename in os.listdir(folder): 
    if filename.endswith('.txt'): 
        file_count += 1
        filepath = os.path.join(folder, filename)
        print(f"\nProcessing file: {filename}")

    with open(filepath, 'r') as f:
        content = f.read()
        
    lines = content.count('\n') + (1 if content else 0)
    words = len(content.split())
    no_spaces = content.replace(" ", "").replace("\n", "")
    chars = len(no_spaces)

    print(f"Lines: {lines}")
    print(f"Words: {words}")
    print(f"Characters: {chars}")

    total_lines += lines
    total_words += words 
    total_chars += chars

print("\n===TOTAL SUMMARY===")
print(f"Total lines: {total_lines}")
print(f"Total words: {total_words}")
print(f"Total characters: {total_chars}")
print(f"Total .txt files processed: {file_count}")