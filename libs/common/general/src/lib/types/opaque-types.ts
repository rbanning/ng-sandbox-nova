// Branded and Opaque essentially the same

//... Branded Type ...
//https://egghead.io/blog/using-branded-types-in-typescript
// old version: 
// export type Branded<T,B> = T & { __BRANDED__: B};
// new version
declare const __BRANDED__: unique symbol;
type Brand<B> = { [__BRANDED__]: B };
export type Branded<T,B> = T & Brand<B>;
export type Opaque<T,B> = Branded<T,B>;     //alias
//EXAMPLE: https://www.typescriptlang.org/play?#code/CYUwxgNghgTiAEYD2A7AzgF3gfWwIQCUBBAOQBEBRM3ALngFcUBLAR3oTQE8BbAIyQgBuAFAZOABwR4YUFMAA8eAHzwAvPADe8ANq5CpStWwBdOnngBfESAAe4pDCxjJ8abNAKAKgBpla+J7wAGSuMnKKSiLC8M4IAKpoIDAAksD+bnIgCpgwTCgA5t7wAEQJSanFkdGx8AAKSJip6WEe8jl5hSX1jcCVUTES8Ykw-lpMwHRlKcBFKFDcIHTtBZbVg3UNWOpjExs9RRhMGBCL8MudUPQYABYOk8NNFsLRAGaMYIeo8FBoaEz5KCIV1uMAAFPZMHRuhgipcbnd4FN4AAfREPYAASk00XgEIwADo4SD-LEkC9QUSHFjVDT4AByc50+AAfm+wIc8DolJg+PGIlWr3enxQ8DgADckolQRhbBglhhcgUsRocXAMPQYCKZTYCWhxBAjqC6XSMfjxZKQKDTQArJB5K38p7waIAehdwCQIDQ8BQSCwAHcHABrfGhkqedYMhUdJlMb2+rA-P4AqC8E4xJADFx0qapOn44rO+Bu5DoLD0Yb3JKjcZ0OmoEB02bzU50gBiTBgmDRSTpVmEpe7FaSVZG21r9IbTJ+PemzYWdY7XawUz7UUHAhA+IgSHyoPNXctw554wxGME8GLLoA8gBpeCh-GzppgWTwXgID3+lCvzBZDPPmkvA-AgoLnBiQA

// *** STRONG OPAQUE/BRANDED TYPE ***
// prob: Branded types can be downcasted to its base type  (see example above)
// see: https://ferreira.io/posts/opaque-branded-types-in-typescript
export type StronglyBranded<T,B> = Branded<T,B> | Brand<B>;   //cannot be downcasted to base type T
export type StronglyOpaque<T,B> = StronglyBranded<T,B>;
//EXAMPLE: https://www.typescriptlang.org/play?#code/CYUwxgNghgTiAEYD2A7AzgF3gfWwIQCUBBAOQBEBRM3ALngFcUBLAR3oTQE8BbAIyQgBuAFAZOABwR4YUFMAA8eAHzwAvPADe8ANq5CpStWwBdOnngBfEWMnxps0AoAqAGmVr4T+ADI7MuYpKIqISCADKGDCoAOYQnPZyIM5uKuoJjvKu7gA+fg6BgvBFAPTFYLIoSFi8CMBIAO4o5ZhJ8BhI8LxQaAg2CE7CwgBmjGAYTKjwcABuIDA9ABQYIAAeGHSYMEwo0QCUmsJwGPQwKG2rGAB0aOIQTBgLAOSPu5czc4uvAFZI2wu7IgswngIVsAFUejAAJLADzpJLyTbbaIueCPCFzGGPIKg8L0SQwDHQ2HqCJRHZxeEKJE7VHoyFYpSDZDoLD0BnAOhEmEeR5waL0aAwR7wbrwbnAEQszDwND4uYSuhheWEjm8uUEkVi5UEiXBaUCECXCBIaILABE7MxnPg5tR73mIAWVuJuwBJWKAHkANLwS7+8Vq8pnGrwOqNZrLWHtTrdXqheALGl7YQGiBGk1m80ahUcuh2qYgWaOpMqiVuwrwUoUGBRGB+gM63PWxCyeAkT1eUPhprdKNtDpdHptBNJyLI3ZAA


