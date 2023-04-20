// 액션 타입
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// 액션 생성함수
export function login(loginInfo) {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

// 초기 상태 설정
const ininState = {
  id: '',
  password: '',
  isLogin: false,
};

// 리듀서
export default function user(state = ininState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.id,
        userPW: action.payload.password,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}
