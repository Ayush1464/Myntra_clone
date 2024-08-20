import React from 'react'
import style from "./Style.module.css"

const ChildHook = (props) => {
  return (
    <div className={style.main}>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>user image</th>
                    <th>user node id</th>
                    
                </tr>
            </thead>

            {props.data.map((ele,index)=>{
                return(
                    <tr key={index+1}>
                        <td>{ele.id}</td>
                        <td>{ele.login}</td>
                        <td><img src={ele.avatar_url} alt="" /></td>
                        <td>{ele.node_id}</td>

                    </tr>
                )
            })}
        </table>


    </div>
  )
}

export default ChildHook