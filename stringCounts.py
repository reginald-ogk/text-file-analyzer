text = input("Enter a sentence: ").lower()

vowels = "aeiou"
vowel_count = 0
consonant_count = 0

for r in text:
    if r.isalpha():
        if r in vowels:
            vowel_count += 1
        else:
            consonant_count += 1

print(f"Vowels: {vowel_count}")
print(f"Consonants: {consonant_count}")