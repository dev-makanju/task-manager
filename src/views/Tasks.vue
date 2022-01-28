<template>
    <div style="position: relative;" class="main">
        <Loading/>
        <Modal/>
        <div class="dashboard-container">
        <Sidenav/>
        <main class="main">
            <div class="tasks-wrapper">
                  <h2>All Created Task</h2>
                <table>
                    <thead>
                        <th>s/n</th>
                        <th>title</th>
                        <th>created at</th>
                        <th>status</th>
                        <th>edit</th>
                        <th>delete</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>build fadaka</td>
                            <td>20th , Aug 2022 </td>
                            <td>pending</td>
                                <td>
                                     edi
                                </td>
                                <td>
                                     del
                                </td>
                             </tr>
                             <tr>
                                 <td>2</td>
                                 <td>build fadaka</td>
                                 <td>20th , Aug 2022 </td>
                                 <td>pending</td>
                                 <td>
                                     edi
                                 </td>
                                 <td>
                                     del
                                 </td>
                             </tr>
                             <tr>
                                 <td>3</td>
                                 <td>build fadaka</td>
                                 <td>20th , Aug 2022 </td>
                                 <td>pending</td>
                                 <td>
                                     edi
                                 </td>
                                 <td>
                                     del
                                 </td>
                             </tr>
                             <tr>
                                 <td>4</td>
                                 <td>build fadaka</td>
                                 <td>20th , Aug 2022 </td>
                                 <td>pending</td>
                                 <td>
                                     edi
                                 </td>
                                 <td>
                                     del
                                 </td>
                             </tr>
                             <tr>
                                 <td>5</td>
                                 <td>build fadaka</td>
                                 <td>20th , Aug 2022 </td>
                                 <td>pending</td>
                                 <td>
                                     edi
                                 </td>
                                 <td>
                                     del
                                 </td>
                             </tr>
                             <tr>
                                 <td>6</td>
                                 <td>build fadaka</td>
                                 <td>20th , Aug 2022 </td>
                                 <td>pending</td>
                                 <td>
                                     edi
                                 </td>
                                 <td>
                                     del
                                 </td>
                             </tr>
                      </tbody>
                  </table>
            </div>
           </main>
        </div>
    </div>
</template>

<script>
    //import Loading from '../components/Loading.vue'
    //import Modal from '../components/modal.vue'
    import Sidenav from '../components/sidenav.vue'
    export default {
        name:"AddTask",
        components:{
             Sidenav
        }
    }
</script>

<style>

/********
***Add a table cell and padding on it
********/

.tasks-wrapper{
    display: flex ;
    justify-content: center ;
    flex-direction: column ;
    width: 80% ;
    margin: 0px auto;
}

table{
    border: 1px solid rgb(189, 201, 230);
    border-radius: 7px;
    border-collapse: collapse;
}


th{
   border: 1px solid rgb(189, 201, 230);
   padding: 7px 20px;
   font-size: 14px;
   font-weight: bold;
}

td{
   border: 1px solid rgb(189, 201, 230);
   padding: 7px 20px;
   font-size: 14px;
}

tr:nth-child(odd){
    background: #eee ;
}


.dashboard-container{
    display: grid ;
    grid-template-columns: 240px 1fr ;
    grid-template-areas: 'aside main';
    height: 100vh;
}

.aside{
    background: whitesmoke;
    box-shadow: 0px 2px 5px 3px rgba(13, 6, 214, 0.304);
    z-index: 111;
    grid-area: 'aside' ;
    display: flex ;
    flex-direction: column ;
    max-width: 240px;
}

@media (max-width:900px) {
    .dashboard-container{
        display: grid ;
        grid-template-columns: 1fr;
        grid-template-areas: 'main';
        height: 100vh;
    }

    .aside{
       position: absolute ;
       top: 0px;
       bottom: 0px;
       width: 100%;
       left: -350px;
    }
    .aside.open{
       position: fixed;
       top: 0px;
       bottom: 0px;
       width: 100%;
       left: 0px ;
       z-index: 222;
    }
}

@media (max-width:650px){
    .dashboard-container{
        display: grid ;
        grid-template-columns: 1fr;
        grid-template-areas: 'aside main';
        height: 100vh;
    }

    .wrapper-items{
        width: 90%;
        margin: 20px auto; 
    }
}

.task-wrapper{
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
    position: absolute ;
    bottom: 25px ;
    display: flex ;
    width: 100% ;
}

</style>