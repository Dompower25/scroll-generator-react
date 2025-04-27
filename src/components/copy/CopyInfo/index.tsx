import { FC } from "react"
import style from './style.module.scss'

interface ICopyInfo {
  execution: Boolean
}

const CopyInfo: FC<ICopyInfo> = (execution) => {
  return (
    <div className={style.copyWind}>
      <div className={style.shell}>
        {execution ? <img
          v-if="execution"
          className={style.img}
          src="../../assets/copyWindow/copySuccessfully.svg"
          alt="copy"
        /> : <img
          v-else
          className={style.img}
          src="../../assets/copyWindow/copyUnsuccessfully.svg"
          alt="copy"
        />
        }
        <div v-if="execution" className={style.textInformation}>copy is successfully</div>
        <div v-else className={style.textInformation}>copy error</div>
      </div>
    </div>
  )
}

export default CopyInfo;