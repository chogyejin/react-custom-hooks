# react-custom-hooks

- [ ] useTitle
- [ ] useInput
- [ ] usePageLeave
- [ ] useClick
- [ ] useFadeIn
- [ ] useFullscreen
- [ ] useHover
- [ ] useNetwork
- [ ] useNotification
- [ ] useScroll
- [ ] useTabs
- [ ] usePreventLeave
- [ ] useConfirm
- [ ] useAxios

# Introduction

- Hooks : function component에서 state 관리 가능

  - class component에 비해서 간결함(this, setState, render ...)

  ## useState

  - initial value를 주게 되면 generics 사용하지 않아도 타입 유추
    ```
    const [item, setItem] = useState<number>(1);
    // const item = useState(1)[0];
    // const setItem = useState(1)[1];
    ```

  ## useEffect

  - effect 역할을 할 function, deps array를 인자로 받음
  - componentDidmount, componentDidUpdate, componentWillUnmount 와

  ## useRef

  - component의 특정 부분을 선택하는 hook, react의 모든 component는 ref라는 prop을 가지고 있음
    - document.getElementById()와 유사
  - 변수에 useRef()를 담고 태그에서 `ref={변수명}`으로 참조

# useInput

- useInput hook에서 `return {value}`는 {value: value} object를 return하는 것과 같다.
- input 태그의 attributes로 `value={name.value} onChange={name.onChange}`를 전달할 것을 `{...name}`으로 unpacking 할 수 있다.
- validator
  - 일정 길이 이상되면 update 안 되게 하는 검증 함수
  - validator에 따라 willUpdate 변경
  - maxLen 함수는 value의 길이에 따라 boolean 반환
  - 특정 문자 들어갔을 때 업데이트 안 되게 하려면 maxLen return을 `!value.includes("#")`

# useTabs

- 버튼에 따라 현재 section의 내용을 보여줌
  - `<div>{currentItem.content}</div>`
  - 버튼은 content 배열을 map() 하며 생기고 index도 갖고 있음
- useTabs hook은 배열에서 현재 누른 탭 object(currentItem, changeItem) return
  - currentItem : `{tab: "...", content: "..."}` 가진 object
  - changeItem : 해당 section의 index로 변경하는 set function

# useTitle

- 문서 제목을 업데이트해주는 hook, 제목을 업데이트해주는 setTitle return
- componentDidmount, componentDidUpdate(title 변경 시)

# useClick(useHover)

- element를 클릭했을 때 어떤 함수 실행
- component가 mount되면 useEffect로 event를 추가하지만 unmount될 때 event를 지워야함
  - componentWillUnmount의 역할은 useEffect 안에 함수를 return하게 작성

# useConfirm

- 사용자가 어떤 행동을 하기 전에 확인, 버튼을 클릭하면 이벤트 실행 전에 메세지 보여줌

# usePreventLeave

- 사용자가 페이지를 닫기 전 확인
- 보호 버튼을 누르면 이벤트를 추가하여 창이 닫히기 전(beforeunload)에 function(listener)를 실행함
- enableProtect, disableProject 함수를 반환하고 이를 버튼의 onClick에 전달

# useBeforeLeave

- 사용자가 document에서 벗어날 때(mouseleave) 실행되는 hook
  - mouseleave, mouseenter는 자기에만 반응, mouseout, mouseover는 직접 걸지 않은 자식 요소에서도 반응하는 event
- 떠나려하는 것은 document에서 위쪽으로 마우스를 향했을 때임(아래, 옆쪽 leave는 event 발생하면 안됨)
  - hook에서 사용되는 handle 함수의 event를 찍으면 clientY가 있음
  - clientY가 음수일 때만 실행되게 작성

# useFadeIn

- duration과 delay를 받아 태그의 transition 속성을 조정하는 hook
  - `current.style.transition`은 transition-property, transition-duration, transition-timing-function, transition-delay의 축약
  - HTML 태그에서 spread로 사용할 수 있는 ref와 style을 가지고 있는 object 리턴
    - `ref={element} style={{ opacity: 0 }}`와 같은 역할

# useNetwork

- network의 상태(online, offline)가 바뀔 때마다 function 호출
  - Network 상태인 status(setStatus)를 return하고 console.log를 찍음(onChange)
- status는 초기 값으로 현재 Network 상태를 가지고 있음
  - navigator.onLine 은 browser의 status(boolean)를 return
- 개발자 도구 > Network > Presets > Offline 으로 오프라인 세팅
  - online은 No throttling, Fast 3G, Slow 3G
- online, offline 이벤트에 따라 handleChange 함수 실행

# useScroll

- scroll에 따라 태그의 글자색, 크기 변경하는 hook
- event handler의 event type은 Type Definition에서 lib.dom.d.ts의 GlobalEventHandlersEventMap을 참고
- window.scrollX, window.scrollY는 수평, 수직으로 얼마나 scroll 됐는지 보여줌

# useFullscreen

- 원하는 element(img, div ...)를 전체 화면으로 만들거나 다시 축소 시키는 hook
  - 여기선 HTMLDivElement type 이용
- 전체 화면은 `element.current`, 돌아가기는 `document`의 함수 실행
- 브라우저별 대응
  - Chrome : requestFullscreen, exitFullscreen
  - Firefox : mozRequestFullScreen, mozCancelFullScreen
  - IE : msRequestFullscreen, msExitFullscreen
  - Edge, Safari : webkitRequestFullscreen, webkitExitFullscreen
- callback 함수로 쓰인 onFull은 현재 상태를 console.log로 출력

# useNotification

- Notification API 이용하여 알림 보내는 hook, [Notification API MDN](https://developer.mozilla.org/ko/docs/Web/API/notification)
  - Chrome : 사이트 설정 > 알림 허용
  - macOS : 시스템 환경설정 > 알림 및 집중모드 > 브라우저 알림 허용
- `new Notification(title, options)`로 객체 인스턴스를 생성해서 알림 보냄
  - title 필수, options optional
- `Notification.permission` : 사용자 알림 상태 denied(거절), granted(허용), default(사용자 선택 알지 못함, 거절)
  - denied : 묻지도 않고 알림 못 보냄
  - granted : 바로 알림 보낼 수 있음
  - default : permission 값 정하는 권한 요청 창 띄움, 허용이면 알림 보내고 차단이면 return, 이후로 권한 유지
