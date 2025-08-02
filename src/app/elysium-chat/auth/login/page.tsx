import LoginBox from "@/components/ElysiumChat/auth/LoginBox";
import Logo from "@/components/ElysiumChat/LogoComponent";

export default function ElysiumChatAuthPage() {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-full px-[18px] py-[10px]">
        <Logo />
      </div>
      <div className="flex items-center justify-center mt-[120px] lg:px-[20px] px-0">
        <LoginBox />
      </div>
    </>
  );
}
