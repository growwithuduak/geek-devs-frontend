/* package main

import "fmt"

func main(){
	fmt.Printf("Hello World!\n")
} */

package main

import "fmt"

func hello(name string) string {
	message := fmt.Sprintf("Hi, %v. welcome!", name)

	return message
}

func main() {
	fmt.Printf(hello ("Joy Job"))
}