import styles from "./Modal.module.css"
import { Modal as MaterialModal } from "@mui/material"
import { Button, TypographyHeader } from "../../../UI_KIT"
import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import cn from 'classnames'
export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = (props) => {
  const dispatch = useAppDispatch()
  const { setIsShowModal, isSuccessEndGame } = props
 
  function handleClose() {
    dispatch(resetStore())
    setIsShowModal(false)
  }
  return (
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div className={cn(styles.container,isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess)}>
        
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <Button onClick={handleClose} className={styles.button}>Start new game</Button>
      </div>
     
    </MaterialModal>
  )
}

export default Modal
