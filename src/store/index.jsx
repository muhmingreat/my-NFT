import {createGlobalState} from 'react-hooks-global-state'
const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: "scale-0",
  showModal: "scale-0",
  updateModal: "scale-0",
  loading: { show: false, msg: "" },
  alert: { show: false, msg: "", color: "" },
});
const setLoadingMsg =(msg) => {
    const loading = getGlobalState('loading', {show:false, msg:''})
    setGlobalState('loading',{...loading, msg})
}
const setAlert = (msg, color='green') => {
    setGlobalState('loading' ,{show:false, msg:''})
    setGlobalState("alert", { show: true, msg, color });
    setTimeout(() =>{
        setGlobalState('alert' ,{show:false, msg, color})

    },6000)

}
export{setGlobalState, useGlobalState, getGlobalState, 
    setAlert,setLoadingMsg}