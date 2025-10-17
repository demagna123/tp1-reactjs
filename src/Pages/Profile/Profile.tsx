import { useEffect, useState } from "react";

export default function Profile() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
  }, []);

  return (
    <div>
      Votre nom est : {name} <br />
      Votre email est : {email}
    </div>
  );
}
