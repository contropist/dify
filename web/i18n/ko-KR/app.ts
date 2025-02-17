const translation = {
  createApp: '앱 만들기',
  types: {
    all: '모두',
    chatbot: '챗봇',
    agent: '에이전트',
    workflow: '워크플로우',
    completion: '완성',
    basic: '기초의',
    advanced: '채팅 플로우',
  },
  duplicate: '복제',
  duplicateTitle: '앱 복제하기',
  export: 'DSL 내보내기',
  exportFailed: 'DSL 내보내기 실패',
  importDSL: 'DSL 파일 가져오기',
  createFromConfigFile: 'DSL 파일에서 생성하기',
  deleteAppConfirmTitle: '이 앱을 삭제하시겠습니까?',
  deleteAppConfirmContent: '앱을 삭제하면 복구할 수 없습니다. 사용자는 더 이상 앱에 액세스할 수 없으며 모든 프롬프트 설정 및 로그가 영구적으로 삭제됩니다.',
  appDeleted: '앱이 삭제되었습니다',
  appDeleteFailed: '앱 삭제 실패',
  join: '커뮤니티에 참여하기',
  communityIntro: '여러 채널에서 팀원, 기여자, 개발자들과 토론하세요.',
  roadmap: '로드맵 보기',
  newApp: {
    startFromBlank: '빈 상태로 시작',
    startFromTemplate: '템플릿에서 시작',
    captionAppType: '어떤 종류의 앱을 만들어 보시겠어요?',
    chatbotDescription: '대화형 어플리케이션을 만듭니다. 질문과 답변 형식을 사용하여 다단계 대화를 지원합니다.',
    completionDescription: '프롬프트를 기반으로 품질 높은 텍스트를 생성하는 어플리케이션을 만듭니다. 기사, 요약, 번역 등을 생성할 수 있습니다.',
    completionWarning: '이 종류의 앱은 더 이상 지원되지 않습니다.',
    agentDescription: '작업을 자동으로 완료하는 지능형 에이전트를 만듭니다.',
    workflowDescription: '고도로 사용자 지정 가능한 워크플로우에 기반한 고품질 텍스트 생성 어플리케이션을 만듭니다. 경험 있는 사용자를 위한 것입니다.',
    workflowWarning: '현재 베타 버전입니다.',
    chatbotType: '챗봇 오케스트레이션 방식',
    basic: '기본',
    basicTip: '초보자용. 나중에 Chatflow로 전환할 수 있습니다.',
    basicFor: '초보자용',
    basicDescription: '기본 오케스트레이션은 내장된 프롬프트를 수정할 수 없고 간단한 설정을 사용하여 챗봇 앱을 오케스트레이션합니다. 초보자용입니다.',
    advanced: 'Chatflow',
    advancedFor: '고급 사용자용',
    advancedDescription: '워크플로우 오케스트레이션은 워크플로우 형식으로 챗봇을 오케스트레이션하며 내장된 프롬프트를 편집할 수 있는 고급 사용자 정의 기능을 제공합니다. 경험이 많은 사용자용입니다.',
    captionName: '앱 아이콘과 이름',
    appNamePlaceholder: '앱 이름을 입력하세요',
    captionDescription: '설명',
    appDescriptionPlaceholder: '앱 설명을 입력하세요',
    useTemplate: '이 템플릿 사용',
    previewDemo: '데모 미리보기',
    chatApp: '어시스턴트',
    chatAppIntro: '대화형 어플리케이션을 만들고 싶어요. 이 어플리케이션은 질문과 답변 형식을 사용하여 다단계 대화를 지원합니다.',
    agentAssistant: '새로운 에이전트 어시스턴트',
    completeApp: '텍스트 생성기',
    completeAppIntro: '프롬프트를 기반으로 품질 높은 텍스트를 생성하는 어플리케이션을 만들고 싶어요. 기사, 요약, 번역 등을 생성합니다.',
    showTemplates: '템플릿 선택',
    hideTemplates: '모드 선택으로 돌아가기',
    Create: '만들기',
    Cancel: '취소',
    nameNotEmpty: '이름을 입력하세요',
    appTemplateNotSelected: '템플릿을 선택하세요',
    appTypeRequired: '앱 종류를 선택하세요',
    appCreated: '앱이 생성되었습니다',
    appCreateFailed: '앱 생성 실패',
    caution: '주의',
    Confirm: '확인하다',
    appCreateDSLErrorPart4: '시스템 지원 DSL 버전:',
    appCreateDSLErrorTitle: '버전 비호환성',
    appCreateDSLErrorPart2: '계속하시겠습니까?',
    appCreateDSLErrorPart3: '현재 응용 프로그램 DSL 버전:',
    appCreateDSLWarning: '주의: DSL 버전 차이는 특정 기능에 영향을 미칠 수 있습니다.',
    appCreateDSLErrorPart1: 'DSL 버전에서 상당한 차이가 감지되었습니다. 강제로 가져오면 응용 프로그램이 오작동할 수 있습니다.',
    chooseAppType: '앱 유형 선택',
    forBeginners: '초보자용',
    forAdvanced: '고급 사용자용',
    chatbotShortDescription: '간단한 설정으로 LLM 기반 챗봇',
    workflowUserDescription: '자동화 및 배치 처리와 같은 단일 라운드 작업을 위한 워크플로우 오케스트레이션.',
    noTemplateFoundTip: '다른 키워드를 사용하여 검색해 보십시오.',
    noIdeaTip: '아이디어가 없으신가요? 템플릿을 확인해 보세요',
    optional: '선택적',
    noTemplateFound: '템플릿을 찾을 수 없습니다.',
    completionShortDescription: '텍스트 생성 작업을 위한 AI 도우미',
    learnMore: '더 알아보세요',
    foundResults: '{{개수}} 결과',
    agentShortDescription: '추론 및 자율적인 도구 사용 기능이 있는 지능형 에이전트',
    advancedShortDescription: '메모리를 사용한 복잡한 다중 턴 대화를 위한 워크플로우',
    noAppsFound: '앱을 찾을 수 없습니다.',
    foundResult: '{{개수}} 결과',
    completionUserDescription: '간단한 구성으로 텍스트 생성 작업을 위한 AI 도우미를 빠르게 구축합니다.',
    chatbotUserDescription: '간단한 구성으로 LLM 기반 챗봇을 빠르게 구축할 수 있습니다. 나중에 Chatflow로 전환할 수 있습니다.',
    workflowShortDescription: '단일 턴 자동화 작업을 위한 오케스트레이션',
    agentUserDescription: '작업 목표를 달성하기 위해 반복적인 추론과 자율적인 도구를 사용할 수 있는 지능형 에이전트입니다.',
    advancedUserDescription: '메모리 기능이 있는 다라운드의 복잡한 대화 작업을 위한 워크플로우 조정.',
  },
  editApp: '정보 편집하기',
  editAppTitle: '앱 정보 편집하기',
  editDone: '앱 정보가 업데이트되었습니다',
  editFailed: '앱 정보 업데이트 실패',
  iconPicker: {
    ok: '확인',
    cancel: '취소',
    emoji: '이모지',
    image: '이미지',
  },
  switch: '워크플로우 오케스트레이션으로 전환하기',
  switchTipStart: '새로운 앱의 복사본이 생성되어 새로운 복사본이 워크플로우 오케스트레이션으로 전환됩니다. 새로운 복사본은 ',
  switchTip: '전환을 허용하지 않습니다',
  switchTipEnd: ' 기본적인 오케스트레이션으로 되돌릴 수 없습니다.',
  switchLabel: '생성될 앱의 복사본',
  removeOriginal: '원본 앱 제거하기',
  switchStart: '전환 시작하기',
  typeSelector: {
    all: '모든 종류',
    chatbot: '챗봇',
    agent: '에이전트',
    workflow: '워크플로우',
    completion: '완성',
    advanced: '채팅 플로우',
  },
  tracing: {
    title: '앱 성능 추적',
    description: '제3자 LLMOps 제공업체 구성 및 앱 성능 추적.',
    config: '구성',
    collapse: '접기',
    expand: '펼치기',
    tracing: '추적',
    disabled: '비활성화됨',
    disabledTip: '먼저 제공업체를 구성해 주세요',
    enabled: '서비스 중',
    tracingDescription: 'LLM 호출, 컨텍스트, 프롬프트, HTTP 요청 등 앱 실행의 전체 컨텍스트를 제3자 추적 플랫폼에 캡처합니다.',
    configProviderTitle: {
      configured: '구성됨',
      notConfigured: '추적을 활성화하려면 제공업체를 구성하세요',
      moreProvider: '더 많은 제공업체',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'LLM 기반 애플리케이션 수명 주기의 모든 단계를 위한 올인원 개발자 플랫폼.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'LLM 애플리케이션을 디버그하고 개선하기 위한 추적, 평가, 프롬프트 관리 및 메트릭.',
    },
    inUse: '사용 중',
    configProvider: {
      title: '구성 ',
      placeholder: '{{key}}를 입력하세요',
      project: '프로젝트',
      publicKey: '공개 키',
      secretKey: '비밀 키',
      viewDocsLink: '{{key}} 문서 보기',
      removeConfirmTitle: '{{key}} 구성을 제거하시겠습니까?',
      removeConfirmContent: '현재 구성이 사용 중입니다. 제거하면 추적 기능이 꺼집니다.',
    },
    view: '보기',
    opik: {
      title: '오픽',
      description: 'Opik은 LLM 애플리케이션을 평가, 테스트 및 모니터링하기 위한 오픈 소스 플랫폼입니다.',
    },
  },
  answerIcon: {
    description: 'WebApp 아이콘을 사용하여 공유 응용 프로그램에서 바꿀🤖지 여부',
    title: 'WebApp 아이콘을 사용하여 🤖',
    descriptionInExplore: 'Explore에서 WebApp 아이콘을 사용하여 바꿀🤖지 여부',
  },
  importFromDSL: 'DSL에서 가져오기',
  importFromDSLFile: 'DSL 파일에서',
  importFromDSLUrl: 'URL에서',
  importFromDSLUrlPlaceholder: '여기에 DSL 링크 붙여 넣기',
  mermaid: {
    handDrawn: '손으로 그린',
    classic: '고전',
  },
  openInExplore: 'Explore에서 열기',
  newAppFromTemplate: {
    sidebar: {
      Agent: '대리인',
      Workflow: '워크플로',
      HR: '인사',
      Programming: '프로그래밍',
      Writing: '쓰기',
      Assistant: '조수',
      Recommended: '권장',
    },
    byCategories: '카테고리별',
    searchAllTemplate: '모든 템플릿 검색...',
  },
  showMyCreatedAppsOnly: '내가 만든 앱만 보기',
}

export default translation
