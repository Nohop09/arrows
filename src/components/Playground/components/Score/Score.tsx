import styles from "./Score.module.css"

import * as hooks from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI_KIT"
import { Chip, Stack } from "@mui/material"

export interface IScoreProps {
  //
}

const Score: React.FC<IScoreProps> = (props) => {
  const state = hooks.useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText> On error, the "Consecutive successful hits" value is reset to zero</TypographyText>
     
      <Stack direction='row' spacing={1}>
          <Chip  className={styles.chipUnsuccess} variant='outlined' label={   <>Errors: <span className={styles.counter}>{state.totalUnsuccesful}</span></>}/>
          <Chip className={styles.chipSuccessful} variant="outlined" label={   <>Succesful: <span className={styles.counter}>{state.totalSuccesful}</span></>}/>

      </Stack>

   
     
   
    </>
  )
}

export default Score
