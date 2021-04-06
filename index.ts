// const next = (value: any) => console.log("next:", value);
// next("hello world");

// import value from "*.json";

interface Observer{
  next: (value: any) => void,
  error: (value: any) => void,
  complete: () => void
}

const observer: Observer = {
  next: (value: any) => console.log("next:", value),
  error: (err: any) => console.log("error:", err),
  complete: () => console.log("complete")
};

observer.next("Something");

