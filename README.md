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
  - componentDidmount, componentDidUpdate, componentWillUnmount 와 유사함

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
