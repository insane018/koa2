
function sum(a, b) {
    return a + b
}
test('10 add 20 equal 30', () => {
    const res = sum(10, 20)
    expect(res).not.toBe(40)
})