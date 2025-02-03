package main

import "testing"

func TestLuhn(t *testing.T){
	tests:=[]struct{
		number string
		valid bool
	}{
		{"4532015112830366", true},  // Valid Visa card
		{"6011111111111117", true},  // Valid Discover card
		{"1234567890123456", false}, // Invalid card
	}

	for _, test:= range tests{
		result := isValidLuhn(test.number)
		if result != test.valid{
			t.Errorf("Luhn check failed for %s, expected %v, got %v", test.number, test.valid, result)
		}
	}
}