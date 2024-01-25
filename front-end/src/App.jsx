import { GoogleButton } from "./components/button/GoogleButton";
import { KakaoButton } from "./components/button/KakaoButton";
import DefaultHeader from "./components/header/DefaultHeader";
import ProductHeader from "./components/header/ProductHeader";
import UserSidebar from "./components/sidebar/UserSidebar";
import { LoginBox } from "./pages/auth/components/LoginBox";
import WorkspaceBody from "./pages/workspace/components/WorkspaceBody";



function App() {
  const works = [
    { id: 1, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 2, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 3, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 2, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 1, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 2, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 1, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 2, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 1, url: "https://picsum.photos/200/300", title: "mywork" },
    { id: 2, url: "https://picsum.photos/200/300", title: "mywork" },
  ];
  return (
    <>
      <div>
        <DefaultHeader />
        <ProductHeader />
        <LoginBox>
          <GoogleButton />
          <KakaoButton />
        </LoginBox>
      </div>
      <div className="flex flex-row">
        <UserSidebar />
        <WorkspaceBody word="내 워크스페이스" works={works} />
      </div>
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> front-feat/sidebar
