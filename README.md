# RNArchitecture

Redux, Typescript를 활용한 RN의 소프트웨어 아키텍쳐 모델 테스트

아직 수정 중인 사항이지만 자주 업데이트 하는 중입니다.

[뉴욕타임즈 API](https://developer.nytimes.com/apis)를 활용해서 데이터를 보여주는 작업을 하였으며

구조는 MVVM패턴과 flux패턴을 참조해 만들었습니다. PR, issue 남겨주시면 감사하겠습니다!!👍

# View

-   사용자에게서 보여지는 UI부분입니다.

## [View](https://github.com/Kwon-Bum-Kyu/RNArchitecture/tree/main/view)

-    추후에 css는 따로 분리하여 작업할 예정입니다. (util폴더를 제작하거나 , view에서 폴더를 나눠 css를 따로 분리할 예정)

# Model
-   앱에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.

## [Model](https://github.com/Kwon-Bum-Kyu/RNArchitecture/tree/main/model)

-   해당 부분이 redux만으로도 처리를 할 수 있을것 같아서 삭제될 수도 있는 부분입니다.

# View Model
- View를 표현하기 위해 만든 View를 위한 Model입니다. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분입니다.

## [ViewController](https://github.com/Kwon-Bum-Kyu/RNArchitecture/tree/main/viewController) 

-   ViewModel은 View를 1:n 구조로 매칭할 수 있고 그러한 구조를 가져가려면 View는 상위 모델인 ViewModel을 알고 있으면 안된다고 생각해서 controller를 따로 분기하였습니다.

- 해당 부분은 View에서 액션이 들어왔을때 처리 해주는 부분이 될 예정입니다.

## [Controller](https://github.com/Kwon-Bum-Kyu/RNArchitecture/tree/main/controller/Home)

-   Model에서 응답 받은 데이터를 가져와 가공하고 저장 하는 부분이 될 부분이며
-   ViewModel에서 데이터가 변경되어도 ViewContoller와 View부분이 작동 하도록 설계할 예정입니다.

# config

-   navigation을 위한 부분입니다. 전체적으로 필요한(Toast 디자인, 네트워크 리스너등)부분이 더 추가될 수도 있습니다.

## [Config](https://github.com/Kwon-Bum-Kyu/RNArchitecture/tree/main/config)


# store

-   redux를 선언한 부분으로 전체적인 state값이 들어갑니다.

## [Store](https://github.com/Kwon-Bum-Kyu/RNArchitecture/blob/main/store/store.tsx)

-   redux의 root선언 부분입니다.

## [reducers](https://github.com/Kwon-Bum-Kyu/RNArchitecture/tree/main/store/reducers)

-   redux의 state와 action을 선언한 부분으로 추후에 action은 분기될 예정입니다.