import { FC, useState } from "react"
import style from './style.module.scss'

interface ICopyInfo {
  execution: Boolean,
  showMounted: number
}

const CopyInfo: FC<ICopyInfo> = (execution) => {
  const [isMounted, setIsMounted] = useState(true)

  setTimeout(() => { setIsMounted(false) }, 3000)
  
  return (
    <div className={isMounted ? style['mounted'] : style['unmounted']}>
      <div className={style.copyWind}>
        <div className={style.shell}>
          {execution.execution ?
            <img
              className={style.img}
              src="../../../../public/copyWindow/copySuccessfully.svg"
              alt="copyInfo"
            /> : <img
              className={style.img}
              src="../../../../public/copyWindow/copyUnsuccessfullt.svg"
              alt="notCopyInfo"
            />
          }
          <div className={style.textInformation}>{execution.execution ? 'copy is successfully' : 'copy error'} </div>
        </div>
      </div>

    </div>
  )
}

export default CopyInfo;