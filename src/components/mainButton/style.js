import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    mainButton: {
        width: '10rem',
        borderWidth: '.1rem',
        transition: 'background 100ms, color 0s',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        '&:hover':{
            backgroundColor: theme.palette.primary.main,
            borderWidth: '.1rem',
            color: "#FF0000"
        }
    }
}));