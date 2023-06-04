import { z } from "zod";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Office hours - zod by Nathan Krasney 4-june-2023</h1>
  </div>
`;

let val = 11;
const schemaString = z.string().min(4);

let res = schemaString.safeParse(val);
console.log(res);

res = schemaString.safeParse("123");
console.log(res);

res = schemaString.safeParse("123AA");
console.log(res);

const userSchema = z.object({
  name: z.string(),
  age: z.number().min(18).max(65),
});

const user = {name : 'avi', age : 21};

try {
  userSchema.parse(user);
} catch (err) {
  console.log(err);
}
