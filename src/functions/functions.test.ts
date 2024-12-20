import { it,describe,expect } from "vitest";
import { factorial,findLongestWord,countVowels,isSubset,findCommonObjects } from "./functions";

describe("factorioal", ()=>{
    it("Pozitív egész számok:", ()=>{
        expect(factorial(5)).toEqual(120)
        expect(factorial(3)).toEqual(6)
    })
    it("Nulla:", ()=>{
        expect(factorial(0)).toEqual(1)
    })
    it("Negatív számok:", ()=>{
        expect(factorial(-3)).toThrowError("Factorial is not defined for negative numbers")
    })
})
describe("find longest word", ()=>{
    it("Normál mondat:", ()=>{
        expect(findLongestWord("The quic brow fox jumps over the lazy dog")).toEqual("jumps")
    })
    it("Egy szavas mondat:", ()=>{
        expect(findLongestWord("Hello")).toEqual("Hello")
    })
    it("Üres mondat:", ()=>{
        expect(findLongestWord("")).toEqual("")
    })
    it("Mondat extra szóközökkel:", ()=>{
        expect(findLongestWord("A quick test ")).toEqual("quick")
    })
})
describe("CountVowel", ()=>{
    it("Normál szöveg:", ()=>{
        expect(countVowels("Hello World")).toEqual(3)
    })
    it("Csak mássalhangzók:", ()=>{
        expect(countVowels("bcdfg")).toEqual(0)
    })
    it("Vegyes kis- és nagybetűk:", ()=>{
        expect(countVowels("AeIoU")).toEqual(5)
    })
    it("Üres sztring:", ()=>{
        expect(countVowels("")).toEqual(0)
    })
})
describe("Is Subest", ()=>{
    it("Részhalmaz", ()=>{
        const obj1 = {
            a:1
        }
        const obj2 = {
            a:1,
            b:2,
        }
        expect(isSubset(obj1, obj2)).toBe(true)
    })
    it("Nem részhalmaz", ()=>{
        const obj1 = {
            c:3
        }
        const obj2 = {
            a:1,
            b:2,
        }
        expect(isSubset(obj1, obj2)).toBe(false)
    })
})
describe("FindCommon object arrays", ()=>{
    it("Közös objektumok vannak", ()=>{
        const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
        const arr2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
        expect(findCommonObjects(arr1,arr2)).toEqual([{id:2,name: 'Bob'}])
    })
    it("Nincsenek közös objektumok", ()=>{
        const arr1 = [{ id: 1, name: 'Alice' }]
        const arr2 = [{ id: 3, name: 'Charlie' }]
        expect(findCommonObjects(arr1,arr2)).toEqual([])
    })
    it("Üres tömbök:", ()=>{
        const arr1 = [{}]
        const arr2 = [{}]
        expect(findCommonObjects(arr1,arr2)).toEqual([{}])
    })
    it("Egyik tömb üres", ()=>{
        const arr1 = [{ id: 1, name: 'Alice' }]
        const arr2 = [{}]
        expect(findCommonObjects(arr1,arr2)).toEqual([])
    })
    
})