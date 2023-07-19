import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,Fragment } from 'react';
//import { UiActions } from './ReduxStore/uiReducer';
import Notification from './components/UI/Notification';
import { sendCartData,fetchCartData } from './ReduxStore/cartAction';


let isInitial=true;

function App() {
  const dispatch = useDispatch();
  const showCart=useSelector(state=>state.ui.cartIsVisible);
  const cart = useSelector(state=>state.cart);

  const notification = useSelector(state=>state.ui.notification);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch]);

   useEffect(()=>{
        if(isInitial){
            isInitial=false;
        return ;
    }
    // if(cart.changed){
      dispatch(sendCartData(cart));
    // }
    
   },[cart,dispatch]);

  // useEffect(()=>{
  //   const sendData = async ()=>{
      // dispatch(UiActions.showNotification({
      //   status:'Pending',
      //   title:'Sending..',
      //   message:'Sending cart data!',
      // }))
      // const response = await fetch('https://shopiee-449da-default-rtdb.firebaseio.com/cart.json',
      // {
      //   method:'PUT',
      //   body:JSON.stringify(cart),
      // })

      // if(!response.ok){
      //   dispatch(UiActions.showNotification({
      //     status:'error',
      //     title:'Error!',
      //     message:'Sending cart data Failed!',
      //   }))
  
      //   throw new Error('Sending data failed');
      // }
      // const data = await response.json();
      // console.log(data);
      // dispatch(UiActions.showNotification({
      //   status:'success',
      //   title:'Success!',
      //   message:'Sent cart data Successfully!',
      // }))

    //}

    // if(isInitial){
    //   isInitial=false;
    //   return ;
    // }
    // sendData().catch(error=>{
    //   dispatch(UiActions.showNotification({
    //     status:'error',
    //     title:'Error!',
    //     message:'Sending cart data Failed!',
    //   }))
    // });
  //},[cart]);
  return (
    <Fragment>
      {notification && <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}
          >
      </Notification>}
    <Layout>
       {showCart && <Cart />}      
    <Products />
    </Layout>

    </Fragment>
  );
}

export default App;
