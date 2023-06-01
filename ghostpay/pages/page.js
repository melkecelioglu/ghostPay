//import styles from "./page.module.css";
import './globals.css'

export default function Home() {
  return (
    <main>
      
      <form
        action="/send-data-here"
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <label for="first" style={{ fontWeight: "bold" }}>
          Data1
        </label>
        <input
          type="text"
          id="first"
          name="first"
          style={{ borderRadius: 7, padding: 5, width: 300, borderWidth: 3,borderColor:"black" }}
        />
        <label for="last" style={{ fontWeight: "bold" }}>
          Data2
        </label>
        <input
          type="text"
          id="last"
          name="last"
          style={{ borderRadius: 7, padding: 5, width: 300, borderWidth: 3,borderColor:"black" }}
        />
        <label for="last" style={{ fontWeight: "bold" }}>
          Data3
        </label>
        <input
          type="text"
          id="last"
          name="last"
          style={{ borderRadius: 7, padding: 5, width: 300, borderWidth: 3,borderColor:"black" }}
        />
        <button
          type="submit"
          style={{
            marginTop: 20,
            padding: 10,
            borderRadius: 11,
            borderWidth: 2,
            borderColor:"darkblue",
            fontWeight:"bold"
          }}
        >
          PAY
        </button>
      </form>
    </main>
  );
}
