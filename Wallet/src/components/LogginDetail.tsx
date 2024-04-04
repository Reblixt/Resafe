import React, { useState } from "react";

type LogginDetailProps = {
  loginFunction: (seedPhrase: string) => void;
};

export const LogginDetail = ({ loginFunction }: LogginDetailProps) => {
  const [seedPhrase, setSeedPhrase] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginFunction(seedPhrase);
  };

  return (
    <div className="login-container">
      <h1 className="login-greeting"> Welcome to Web3</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seed phrase"
          value={seedPhrase}
          onChange={(e) => {
            setSeedPhrase(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
};
