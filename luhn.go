package main

import (
	"strconv"
)

func isValidLuhn(cardNumber string) bool {
	var sum int
	alt:= false
	for i:= len(cardNumber) -1; i>=0; i--{
		n,err := strconv.Atoi(string(cardNumber[i]))
		if err != nil{
			return false
		}
		if alt {
			n*=2
			if n>9 {
				n-=9
			}
		}
		sum+=n
		alt=!alt
	}
	return sum%10 ==0
}