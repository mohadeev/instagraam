import "../styles/globals.css";
import MainContent from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import AddPost from "../components/body/addpost/AddPost";

function MyApp({ Component, pageProps }) {
  // const AddPostCondestion = useSelector(
  //   (state) => state.AddPostReducers.AddPostCondestion
  // );
  return (
    <Provider store={store}>
            {/* {AddPostCondestion && <AddPost />} */}

      <MainContent>
        <Component {...pageProps} />
      </MainContent>
    </Provider>
  );
}

export default MyApp;
