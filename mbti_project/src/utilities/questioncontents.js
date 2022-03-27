// 12개의 질문을 포함한 하나의 배열!
const contents = [
  {
    img: "./questionImage/one.jpg",
    number: 1,
    question: `집으로 가는 길, 우연히 한 남성이 다가와 10만 원을 걸고 '딱지치기' 게임을 제안한다. 나의 반응은?`,
    answer1: "10만원 이면 완전 땡큐지' 바로 게임에 응한다.",
    answer2: "뭔 미친놈인가?' 생각하며 무시하고 간다",
    type: "e",
  },
  {
    img: "./questionImage/two.jpg",
    number: 2,
    question:
      "딱지치기 게임 이후, 오징어 게임 참가를 제안받았다. 명함부터 수상한데...과연 나라면?",
    answer1: "인생 뭐 있어, 바로 명함에 적힌 번호로 전화를 건다.",
    answer2: "에잇, 요즘 사기꾼들이 얼마나 많은데! 좀 더 고민해보고 결정한다!",
    type: "e",
  },
  {
    img: "./questionImage/three.jpg",
    number: 3,
    question:
      "드디어 오징어 게임 start! 첫 번째 게임, '무궁화 꽃이 피었습니다'가 시작됐다. 나의 게임 스타일은?",
    answer1: "누구보다 빠르게, 남들과는 다르게 1등으로 게임을 통과한다.",
    answer2: "천천히 주변을 살피며 앞사람 뒤에 숨어 조금씩 이동한다.",
    type: "s",
  },
  {
    img: "./questionImage/four.jpg",
    number: 4,
    question: "두 번째 게임, 달고나 게임이 시작됐다. 나의 뽑기 방법은?",
    answer1: "정성스럽게 혀로 핥아가며 모양을 뽑는다.",
    answer2: "조심스럽게 부러트려 모양을 뽑는다.",
    type: "t",
  },
  {
    img: "./questionImage/five.jpg",
    number: 5,
    question:
      "게임에서 유리하기 위해선 내 편을 만들어야 한다! 나만의 어필 방법은?",
    answer1:
      "함께 하면 어떤 점이 이득인지 논리적으로 설득하여 내 편으로 만든다.",
    answer2: "살아 남기 위해 최대한 나의 장점을 열정적으로 어필한다.",
    type: "j",
  },
  {
    img: "./questionImage/six.jpg",
    number: 6,
    question:
      "세 번째 게임, 암전이 되고 비명소리와 함께 사람들이 하나 둘 쓰러져나간다. 이때 나의 행동은?",
    answer1: " 그냥 당할 순 없지. 먼저 상대방을 공격하여 반드시 살아남는다.",
    answer2: "정말 너무나 무섭다. 어딘가에 숨어 이 상황이 끝나기만 기다린다.",
    type: "e",
  },
  {
    img: "./questionImage/seven.jpg",
    number: 7,
    question:
      "네 번째 게임, 줄다리기 게임이 시작됐다.어떤 사람들과 팀을 이룰까?",
    answer1: "뭔가 오합지졸이지만 인간적이고 협심하여 전략을 짜는 팀워크 팀",
    answer2: "무식해 보이지만 몸 좋고 힘세 보이는 남성 중심구성 팀",
    type: "j",
  },
  {
    img: "./questionImage/eight.jpg",
    number: 8,
    question:
      "다섯 번째 게임, 구슬치기 게임이 시작됐다.이기기 위한 나만의 전략은?",
    answer1: "절대 질 수 없지. 거짓말을 해서라도 빼앗는다.",
    answer2: "이렇게 까지 해야할까? 양보하고 게임을 자진 포기한다.",
    type: "t",
  },
  {
    img: "./questionImage/nine.jpg",
    number: 9,
    question: "다음 게임 시작 전, 선착순으로 게임 순서를 정한다면 나의 선택은?",
    answer1: "제일 처음은 뭔가 불안한걸..중간 또는 뒷 순서를 선택한다.",
    answer2: "무조건 1번이지! 꼭 일등으로 나가리다. 제일 초반 순서를 선택한다.",
    type: "s",
  },
  {
    img: "./questionImage/ten.jpg",
    number: 10,
    question:
      "여섯 번째 게임, 다리 건너기 게임이 시작됐다. 그런데 갑자기 앞사람이 멈추어버렸다. 다음 나의 행동은?",
    answer1: "힘으로 밀쳐내서라도 길을 건너서 다음 게임에 참여한다.",
    answer2: "앞사람이 무사히 길을 건널 수 있도록 방향을 추측하여 알려준다.",
    type: "s",
  },
  {
    img: "./questionImage/eleven.jpg",
    number: 11,
    question:
      "드디어 모든 게임에서 승리하고 최종 우승자가 되었다. 상금 456억을 어떻게 쓸까?",
    answer1:
      "남은 부채를 청산하고 비밀로 한 채 일상으로 돌아가 평범한 삶을 산다.",
    answer2:
      "돈을 쓰라고 있는 법! 빌딩을 구매해 건물주가 되고 남은 금액을 주식과 코인에 몰빵한다.",
    type: "t",
  },
  {
    img: "./questionImage/twelve.jpg",
    number: 12,
    question:
      "게임은 잊혀지고 평범한 하루를 보내던 어느 날, 다시 제안받게 되는 오징어 게임,과연 나의 선택은?",
    answer1:
      "그날의 게임은 너무나 끔찍한 악몽인걸! 재도전은 너무나 어려워. 포기하고 지금의 삶을 살아간다.",
    answer2:
      "못 먹어도 고! 이번엔 더 잘할 수 있을 것 같은데? 다시 게임에 도전한다.",
    type: "j",
  },
];

export default contents;
