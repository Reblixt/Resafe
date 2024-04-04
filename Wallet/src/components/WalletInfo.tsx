export const WalletInfo = ({ walletData }) => {
  return (
    <div>
      <p>Seed Phrase: {walletData.mnemonic}</p>
      <p>Address: {walletData.wallet.address}</p>
      <p>Private key: {walletData.wallet.privateKey}</p>
    </div>
  );
};
