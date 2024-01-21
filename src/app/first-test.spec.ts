describe('first test', ()=>{
    let testVariable:any;

    beforeEach(()=>{
        testVariable = {}
    })

    it('should return true if it is true',()=>{
        //arrange
        testVariable.a = false;

        //act
        testVariable.a = true;

        //assert
        expect(testVariable.a).toBe(true);
    })
})