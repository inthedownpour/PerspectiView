/* eslint-disable react/jsx-key */
import { BookPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductDetail from "./ProductDetail";
import { PlusCircleIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const works = [
  { id: 1, url: "https://picsum.photos/200/300", title: "mywork" },
  { id: 2, url: "https://picsum.photos/200/300", title: "mywork" },
  { id: 3, url: "https://picsum.photos/200/300", title: "mywork" },
  { id: 4, url: "https://picsum.photos/200/300", title: "mywork" },
  { id: 5, url: "https://picsum.photos/200/300", title: "mywork" },
];

function CreateWork() {
  return (
    <Card className="flex items-center justify-center w-32 border-dashed h-36">
      <BookPlus color="#909090" />
    </Card>
  );
}

function EachWork({ url, title }) {
  return (
    <div className="flex flex-col items-center ">
      <Card className="w-32 h-36 ">
        <img
          className="w-full h-full rounded-xl"
          src={url}
          alt="cover of work"
        />
      </Card>
      <div className="m-2">{title}</div>
    </div>
  );
}

function OneButtonselect() {
  const arr = [
    { id: 1, name: "드라마" },
    { id: 2, name: "로맨스" },
    { id: 3, name: "느와르" },
    { id: 4, name: "스릴러" },
    { id: 5, name: "SF" },
  ];
  const [pick, setPick] = useState(arr);
  const [select, setSelect] = useState([]);

  return pick.map((item) => (
    <div key={item.id}>
      <Badge
        onClick={() => {
          !select.includes(item)
            ? setSelect((select) => [...select, item])
            : setSelect(select.filter((button) => button !== item));
        }}
        variant={select.includes(item) ? "destructive" : "off"}
      >
        {item.name}
      </Badge>
    </div>
  ));
}

function RadioGroupDemo() {

  const arrs = [
    { id: 1, name: "웹소설" },
    { id: 2, name: "시나리오" },
    { id: 3, name: "웹툰 스토리" },
    { id: 4, name: "게임 스토리" },
    { id: 5, name: "에세이" },
  ];
  return (
    <RadioGroup className="flex flex-row" defaultValue="comfortable">
      {
        arrs.map((arr, idx) =>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={arr.name} id={arr.id} />
            <Badge>
              <Label htmlFor={arr.id}>{arr.name}</Label>
            </Badge>
          </div>
        )
      }
    </RadioGroup>
  );
}
  

// const arr = [
//   { id: 1, name: "웹소설" },
//   { id: 2, name: "시나리오" },
//   { id: 3, name: "웹툰 스토리" },
//   { id: 4, name: "게임 스토리" },
//   { id: 5, name: "에세이" },
// ];


function WorkList() {
  return (
    <div className="flex flex-wrap w-full h-screen p-6 gap-x-10 gap-y-20">
      <AlertDialog className="w-full h-full">
        <div>
          <AlertDialogTrigger>
            <Card className="flex items-center justify-center w-32 border-dashed h-36">
              <BookPlus color="#909090" />
            </Card>
          </AlertDialogTrigger>
        </div>
        <AlertDialogContent className="flex flex-row w-2/3 max-w-2/3 h-2/3">
          <div className="box-border flex flex-col w-1/4 h-full p-3 m-3">
            <AlertDialogHeader className="flex flex-col w-full h-full">
              <CardTitle className="text-2xl">
                <div>작품 생성</div>
              </CardTitle>
              <div className="flex items-center justify-center w-full my-3 bg-gray-300 border h-2/3">
                <PlusCircleIcon />
              </div>
            </AlertDialogHeader>
          </div>
          <div className="box-border flex flex-col w-2/3 h-full p-3">
            <div className="flex flex-col justify-around w-full h-5/6">
              <div className="flex flex-row w-full m-2">
                <div className="box-border w-1/6 mr-3 text-xl">작품명</div>
                <div className="box-border w-5/6">
                  <input type="text" className="border" />
                </div>
              </div>
              <div className="flex flex-row w-full m-2">
                <div className="box-border w-1/6 mr-3 text-xl">장르</div>
                <div className="box-border flex flex-wrap w-5/6 gap-2">
                  <OneButtonselect className="w-full" />
                </div>
              </div>
              <div className="flex flex-row w-full m-2">
                <div className="box-border w-1/6 mr-3 text-xl">분류</div>
                <div className="box-border flex flex-wrap w-5/6 gap-2">
                  {/* <Badge variant="destructive">웹소설</Badge>
                  <Badge variant="off">시나리오</Badge>
                  <Badge variant="off">웹툰 스토리</Badge>
                  <Badge variant="off">게임 스토리</Badge>
                  <Badge variant="off">에세이</Badge> */}
                  {/* FIXME 임시 클릭으로 변경 계획중 */}
                  <RadioGroupDemo />
                </div>
              </div>
              <div className="flex flex-row w-full m-2">
                <div className="box-border w-1/6 mr-3 text-xl">설명</div>
                <div className="box-border w-5/6">
                  <Textarea className="w-4/5" />
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>취소하기</AlertDialogCancel>
              <AlertDialogAction>생성하기</AlertDialogAction>
              {/* FIXME 해당 생성하기는 추후 작품 생성 기능 구현 */}
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      {/* 작품생성 */}
      {works.map((work, index) => (
        <AlertDialog className="w-full h-full">
          <div>
            <AlertDialogTrigger>
              <EachWork url={work.url} title={work.title} key={index} />
            </AlertDialogTrigger>
          </div>
          <AlertDialogContent className="flex flex-row w-2/3 max-w-2/3 h-2/3">
            <div className="box-border flex flex-col w-1/4 h-full p-3 m-3">
              <AlertDialogHeader className="flex flex-col w-full h-full">
                <CardTitle className="text-2xl">
                  <div>작품 조회</div>
                </CardTitle>
                <div className="flex items-center justify-center w-2/3 my-3 bg-gray-300 border h-1/2">
                  이미지 들어갈 자리
                  {/* TODO 이미지 */}
                </div>
              </AlertDialogHeader>
            </div>
            <div className="box-border flex flex-col w-2/3 h-full p-3">
              <div className="flex flex-col justify-around w-full h-5/6">
                <div className="flex flex-row w-full m-2">
                  <div className="box-border w-1/6 mr-3 text-xl">작품명</div>
                  <div className="box-border w-5/6">
                    <input
                      readOnly="true"
                      className="border"
                      value="작품명이다"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full m-2">
                  <div className="box-border w-1/6 mr-3 text-xl">장르</div>
                  <div className="box-border flex flex-wrap w-5/6 gap-2">
                    <OneButtonselect />
                    {/* FIXME 복수 선택 */}
                  </div>
                </div>
                <div className="flex flex-row w-full m-2">
                  <div className="box-border w-1/6 mr-3 text-xl">분류</div>
                  <div className="box-border flex flex-wrap w-5/6 gap-2">
                    <Badge variant="destructive">웹소설</Badge>
                    <Badge variant="off">시나리오</Badge>
                    <Badge variant="off">웹툰 스토리</Badge>
                    <Badge variant="off">게임 스토리</Badge>
                    <Badge variant="off">에세이</Badge>
                    {/* FIXME 단일 선택 */}
                  </div>
                </div>
                <div className="flex flex-row w-full m-2">
                  <div className="box-border w-1/6 mr-3 text-xl">설명</div>
                  <div className="box-border w-5/6">
                    <Textarea
                      className="w-2/3 overflow-y-auto resize-none"
                      readOnly="true"
                      value="하나둘삼넷오여섯칠팔아홉공"
                    />
                  </div>
                </div>
              </div>
              <Link to={`/product/${index}`} key={index}>
                <div className="flex justify-end m-3 text-blue-500 h-1/6">
                  작품 상세 정보 보기
                </div>
              </Link>
              <AlertDialogFooter>
                <AlertDialogCancel>취소하기</AlertDialogCancel>
                <AlertDialogAction>수정하기</AlertDialogAction>
                {/* FIXME 해당 생성하기는 추후 작품 생성 기능 구현 */}
              </AlertDialogFooter>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      ))}
      {/* 작품수정 */}
    </div>
  );
}

export default WorkList;
