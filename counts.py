def main():
    sentence = input("Enter a sentence: ").strip()

    words = sentence.split()
    word_count = 0
    for _ in words:
        word_count += 1

    no_spaces = sentence.replace(" ", "")
    char_count = 0
    for _ in no_spaces:
        char_count += 1

    lowercase_sentence = sentence.lower()
    vowels = 'aeiou'
    vowel_count = 0

    for char in lowercase_sentence:
        if char in vowels:
            vowel_count += 1

    print(f"Word count: {word_count}")
    print(f"Character count (excluding spaces): {char_count}")  # Using _ as a throwaway variable
    print(f"Vowel count: {vowel_count}")    

main() 
# The underscore (_) is used as a throwaway variable in the for loop since we don't need to use the actual value from the list.
