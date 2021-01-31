import React from "react"
import {Button} from '@material-ui/core'
import styled from 'styled-components'

const MainButton = ({className, text}) => {

  return (
    <Button color='primary' variant='outlined' className={className}>{text}</Button>
  )
}

export default styled(MainButton)`
    color:white;
    background-color: blue;
    height: 80px;
    :hover{
        background-color: red;
        color: blue;
    }
`