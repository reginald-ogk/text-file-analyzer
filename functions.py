# functions.py
# This program defines a function to extract odd numbers from a list and count them.


def get_odds(numbers):
    odds = []
    count = 0

    for n in numbers:
        if n % 2 != 0:
            odds.append(n)
            count += 1

    return odds, count


def main():
    raw = input("Enter a list of numbers separated by spaces: ").split()
    numbers = []

    for item in raw:
        if item.isdigit():
            numbers.append(int(item))

    odds, count = get_odds(numbers)

    print("Odd numbers:", odds)
    print("Count:", count)

main()
# The underscore (_) is used as a throwaway variable in the for loop since we don't need to use the actual value from the list.