import { cn } from "@/lib/utils"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import Check from "@/assets/Icon.svg"
import Book from "@/assets/OpenBook.svg"
// import { useState } from "react"

export function ForeshadowingCard({ className }) {

  // const [cardActive, setCardActive] = useState('')
    
  
  return (
    
    <Card className="box-border flex flex-col w-full p-2 my-2">
      <CardHeader>
        <CardTitle>복선 
          {/* TODO '복선' text 입력 위치에 제목 내용 받아와 출력 */}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex p-1 space-y-1">
          <img src={Book} className="mr-2" />
          <p className="text-sm font-medium leading-none ">
            내용

            {/* TODO
            '내용' text 입력 위치에 복선 내용 받아와 출력 */}
          </p>
          
        </div>
        <div className="flex p-1 space-y-1">
          <img src={Check} className="mr-2" />
          <p className="text-sm font-medium leading-none">
            언급된 스토리
          </p>
          {/* TODO 여기에 언급된 스토리 넣기 
          */}
          
        </div>
      </CardContent>
      
    </Card>
  )
}
