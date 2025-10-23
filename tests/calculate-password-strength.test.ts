import {calculatePasswordStrength} from "../src/calculate-password-strength";


test('password empty', () => {
    expect(calculatePasswordStrength("")).toBe("Very Weak")     ;
})

test('password contains just numbers and less than 8 characters', () => {
    expect(calculatePasswordStrength("12345")).toBe("Very Weak")     ;
})

test('password contains just letters and less than 8 characters', () => {
    expect(calculatePasswordStrength("qwer")).toBe("Very Weak")     ;
})

test('password contains just special characters and less than 8 characters', () => {
    expect(calculatePasswordStrength(".-?^+%")).toBe("Very Weak")     ;
})

test('password contains numbers and letters and less than 8 characters', () => {
    expect(calculatePasswordStrength("12qwer")).toBe("Very Weak")     ;
})

test('password contains numbers letters and special characters less than 8 characters', () => {
    expect(calculatePasswordStrength("12qwer.")).toBe("Weak")     ;
})

test('password contains numbers letters and special characters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("12qwer.*3")).toBe("Moderate")     ;
})

test('password contains numbers letters and special characters more than 12 characters', () => {
    expect(calculatePasswordStrength("12q12qwer.wer.")).toBe("Strong")     ;
})

test('password contains numbers, lowercase letters and special characters less than 8 characters', () => {
    expect(calculatePasswordStrength("12wer-")).toBe("Weak")     ;
})

test('password contains numbers, uppercase letters and special characters less than 8 characters', () => {
    expect(calculatePasswordStrength("12QQ.")).toBe("Weak")     ;
})

test('password contains numbers, lowercase letters and special characters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("123wer?-")).toBe("Moderate")     ;
})

test('password contains numbers, uppercase letters and special characters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("12QQQQQ.*")).toBe("Moderate")     ;
})

test('password contains numbers, lowercase letters and special characters and more than 12 characters', () => {
    expect(calculatePasswordStrength("1234567wer?-")).toBe("Strong")     ;
})

test('password contains numbers, uppercase letters and special characters and consist of more than 12 characters', () => {
    expect(calculatePasswordStrength("123455667QQQQQ.*")).toBe("Strong")     ;
})

test('password contains numbers, lowercase uppercase letters and special characters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("1qQ1r.wer.")).toBe("Strong")     ;
})

test('password contains numbers, lowercase uppercase letters and special characters more than 12 characters', () => {
    expect(calculatePasswordStrength("1qwerQ1r.wer.")).toBe("Strong")     ;
})

test('password contains numbers and letters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("12345qwer")).toBe("Weak")     ;
})

test('password contains numbers and letters and more than 12 characters', () => {
    expect(calculatePasswordStrength("1212345qwer345qwer")).toBe("Moderate")     ;
})

test('password contains just numbers and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("12345678")).toBe("Very Weak")     ;
})

test('password contains just letters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("qwertyuop")).toBe("Very Weak")     ;
})

test('password contains just special characters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength(".%?^++%&/")).toBe("Very Weak")     ;
})

test('password contains lowercase and uppercase letters and less than 8 characters', () => {
    expect(calculatePasswordStrength("Qwer")).toBe("Very Weak")     ;
})

test('password contains lowercase and uppercase letters and consist of between 8 and 12 characters', () => {
    expect(calculatePasswordStrength("Qwertyuop")).toBe("Weak")     ;
})

test('password contains just numbers and more than 12 characters', () => {
    expect(calculatePasswordStrength("1234567891234")).toBe("Weak")     ;
})

test('password contains just letters and more than 12 characters ', () => {
    expect(calculatePasswordStrength("qwertyuopwedwed")).toBe("Weak")     ;
})

test('password contains just special characters and more than 12 characters', () => {
    expect(calculatePasswordStrength(".%?^++%&.%?^++%&/")).toBe("Weak")     ;
})

test('password contains lowercase and uppercase letters and more than 12 characters', () => {
    expect(calculatePasswordStrength("Qwertyuop")).toBe("Weak")     ;
})