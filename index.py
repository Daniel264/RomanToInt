def generate_decimal_places(num):
    num_str = str(num)

    copy_str = list(map(lambda x:x, num_str))

    def decimal_places(str):
        copy_str.remove(str)
        return int( str + "0"*(len(copy_str)))
    
    num_array = list(map(decimal_places, num_str))

    return (num_array)

def handle_thousands(num):
    return "M" * (num//1000)

def handle_hundreds(num):
    num = num//100
    if num <= 3: return "C" * num
    if num == 4: return "CD"
    if num == 5 : return "D"
    if num > 5 and num < 9: return "D" + "C"*(num - 5)
    if num == 9 : return "CM"

def handle_tens(num):
    num = num//10
    if num <= 3: return "X" * num
    if num == 4: return "XL"
    if num == 5 : return "L"
    if num > 5 and num < 9: return "L" + "X"*(num - 5)
    if num == 9 : return "XC"

def handle_less_than_ten(num):
    if num <= 3: return "I" * num
    if num == 4: return "IV"
    if num == 5 : return "V"
    if num > 5 and num < 9: return "V" + "I"*(num - 5)
    if num == 9 : return "IX"

def convert_to_roman(num):
    result = ''
    num_array = generate_decimal_places(num)
    
    for num in num_array:
        if num >= 1000:
            result += handle_thousands(num)
            pass
        elif num >= 100:
            result += handle_hundreds(num)
            pass
        elif num >= 10:
            result += handle_tens(num)
            pass
        else:
            result += handle_less_than_ten(num)
            pass
    return(result)

# for l in range(2, 10, 1):
print(2345 ,convert_to_roman(3894))