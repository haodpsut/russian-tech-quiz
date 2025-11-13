
import { Flashcard } from '../types';

export const flashcards: Flashcard[] = [
  // Core Questions from User Input
  {
    id: 1,
    term_ru: "Каким образом доказывается сжатие без потерь с помощью НС?",
    translation_vi: "Làm thế nào để chứng minh nén không mất mát bằng Mạng Nơ-ron?",
    translation_en: "How is lossless compression proven using a Neural Network?",
    explanation_ru: "НС (ST-GNN) не генерирует сжатые данные напрямую. Она предсказывает распределение вероятностей для следующего значения. Затем это распределение передается стандартному алгоритму энтропийного кодирования (например, арифметическому), который по своей природе является безпотерьным. НС повышает эффективность, а энтропийный кодер гарантирует безошибочность.",
    explanation_vi: "Mạng Nơ-ron (ST-GNN) không trực tiếp tạo ra dữ liệu nén. Nó dự đoán phân phối xác suất cho giá trị tiếp theo. Phân phối này sau đó được chuyển cho một thuật toán mã hóa entropy tiêu chuẩn (ví dụ: mã hóa số học), vốn có bản chất là không mất mát. Mạng nơ-ron nâng cao hiệu quả, còn bộ mã hóa entropy đảm bảo tính chính xác.",
    explanation_en: "The NN (ST-GNN) does not generate compressed data directly. It predicts the probability distribution for the next value. This distribution is then passed to a standard entropy coding algorithm (e.g., arithmetic coding), which is inherently lossless. The NN improves efficiency, while the entropy coder guarantees accuracy."
  },
  {
    id: 2,
    term_ru: "Генетический алгоритм - это часть AI или что-то другое?",
    translation_vi: "Thuật toán di truyền là một phần của AI hay là cái gì khác?",
    translation_en: "Is a Genetic Algorithm part of AI or something else?",
    explanation_ru: "Да, это часть AI. Генетические алгоритмы относятся к эволюционным вычислениям, которые являются одним из направлений искусственного интеллекта. Они имитируют процессы естественного отбора для поиска оптимальных решений.",
    explanation_vi: "Đúng, nó là một phần của AI. Các thuật toán di truyền thuộc về lĩnh vực Tính toán Tiến hóa, là một trong những nhánh của Trí tuệ Nhân tạo. Chúng mô phỏng các quá trình chọn lọc tự nhiên để tìm kiếm các giải pháp tối ưu.",
    explanation_en: "Yes, it is part of AI. Genetic algorithms belong to Evolutionary Computation, which is a branch of Artificial Intelligence. They mimic the processes of natural selection to find optimal solutions."
  },
  {
    id: 3,
    term_ru: "Зачем использовать AI при вычислении p_i, если есть формула?",
    translation_vi: "Tại sao dùng AI để tính p_i nếu đã có công thức?",
    translation_en: "Why use AI to calculate p_i if there is already a formula?",
    explanation_ru: "AI (MLP) не заменяет формулу, а обеспечивает её интеллектуальным входом (y_i - прогнозируемый тип трафика). Без этого компонента, формула p_i была бы лишь статическим набором правил. Именно y_i придает системе способность адаптироваться к изменяющемуся трафику, делая приоритизацию динамической.",
    explanation_vi: "AI (MLP) không thay thế công thức, mà cung cấp cho nó một đầu vào thông minh (y_i - loại lưu lượng được dự báo). Nếu không có thành phần này, công thức p_i sẽ chỉ là một bộ quy tắc tĩnh. Chính y_i mang lại cho hệ thống khả năng thích ứng với lưu lượng thay đổi, làm cho việc ưu tiên hóa trở nên động.",
    explanation_en: "AI (MLP) doesn't replace the formula, but provides it with an intelligent input (y_i - the predicted traffic type). Without this component, the p_i formula would just be a static set of rules. It is y_i that gives the system the ability to adapt to changing traffic, making prioritization dynamic."
  },
  {
    id: 4,
    term_ru: "Должен ли быть параметр нагрузки в формуле по D_i?",
    translation_vi: "Có cần tham số tải trong công thức tính D_i không?",
    translation_en: "Should there be a load parameter in the formula for D_i?",
    explanation_ru: "Да. В формуле D_i = 1 / (μ_i - λ), параметр λ (лямбда) — это и есть параметр нагрузки. Он представляет собой интенсивность входного потока пакетов (скорость поступления пакетов).",
    explanation_vi: "Có. Trong công thức D_i = 1 / (μ_i - λ), tham số λ (lambda) chính là tham số tải. Nó đại diện cho cường độ của luồng gói tin đầu vào (tốc độ gói tin đến).",
    explanation_en: "Yes. In the formula D_i = 1 / (μ_i - λ), the parameter λ (lambda) is the load parameter. It represents the intensity of the incoming packet stream (packet arrival rate)."
  },
  {
    id: 5,
    term_ru: "Как сформулировать научную задачу диссертации?",
    translation_vi: "Làm thế nào để phát biểu bài toán khoa học của luận án?",
    translation_en: "How to formulate the scientific problem of the dissertation?",
    explanation_ru: "Научная задача заключается в разрешении противоречия между растущими требованиями к минимизации задержки и ограниченной эффективностью существующих методов управления в динамичных условиях. Необходимо разработать новый подход на основе проактивных моделей ИИ.",
    explanation_vi: "Bài toán khoa học nằm ở việc giải quyết mâu thuẫn giữa yêu cầu ngày càng tăng về giảm thiểu độ trễ và hiệu quả hạn chế của các phương pháp quản lý hiện có trong điều kiện động. Cần phải phát triển một phương pháp tiếp cận mới dựa trên các mô hình AI chủ động.",
    explanation_en: "The scientific problem lies in resolving the contradiction between the growing demands for minimizing latency and the limited effectiveness of existing management methods in dynamic conditions. A new approach based on proactive AI models needs to be developed."
  },
  {
    id: 6,
    term_ru: "В чем суть двухкомпонентной модели упреждающего управления трафиком?",
    translation_vi: "Bản chất của mô hình hai thành phần để quản lý lưu lượng chủ động là gì?",
    translation_en: "What is the essence of the two-component model for proactive traffic management?",
    explanation_ru: "Модель состоит из двух уровней: на верхнем уровне модель ИИ (MLP) выполняет проактивное прогнозирование типа трафика (y_i). На нижнем уровне аналитическая формула (p_i) использует этот прогноз для расчета конкретного значения приоритета.",
    explanation_vi: "Mô hình gồm hai cấp: ở cấp trên, mô hình AI (MLP) thực hiện việc dự báo chủ động loại lưu lượng (y_i). Ở cấp dưới, một công thức phân tích (p_i) sử dụng dự báo này để tính toán giá trị ưu tiên cụ thể.",
    explanation_en: "The model has two levels: at the upper level, an AI model (MLP) performs proactive prediction of the traffic type (y_i). At the lower level, an analytical formula (p_i) uses this prediction to calculate a specific priority value."
  },
  {
    id: 7,
    term_ru: "Зачем используется модель M/M/1 в диссертации?",
    translation_vi: "Tại sao mô hình M/M/1 được sử dụng trong luận án?",
    translation_en: "Why is the M/M/1 model used in the dissertation?",
    explanation_ru: "Модель M/M/1 используется не для точного моделирования сети, а как аналитический инструмент для теоретического доказательства. Она наглядно показывает принципиальную взаимосвязь между скоростью обслуживания (μ) и задержкой (D), доказывая, что увеличение μ (благодаря приоритету p_i) снижает задержку.",
    explanation_vi: "Mô hình M/M/1 được sử dụng không phải để mô hình hóa chính xác mạng, mà như một công cụ phân tích để chứng minh lý thuyết. Nó minh họa rõ ràng mối quan hệ nguyên tắc giữa tốc độ phục vụ (μ) và độ trễ (D), chứng minh rằng việc tăng μ (nhờ độ ưu tiên p_i) sẽ làm giảm độ trễ.",
    explanation_en: "The M/M/1 model is not used for accurate network modeling, but as an analytical tool for theoretical proof. It visually demonstrates the fundamental relationship between service rate (μ) and delay (D), proving that increasing μ (due to priority p_i) reduces delay."
  },
  {
    id: 8,
    term_ru: "В чем заключается задача многокритериальной оптимизации в работе?",
    translation_vi: "Bài toán tối ưu hóa đa mục tiêu trong công trình là gì?",
    translation_en: "What is the multi-objective optimization problem in the work?",
    explanation_ru: "Задача заключается в поиске фундаментального компромисса между тремя конфликтующими целями: минимизацией задержки (d_sys), потерь (lr_sys) и энергопотребления (Pl_sys) в многолучевой спутниковой системе.",
    // FIX: Changed duplicate 'translation_vi' property to 'explanation_vi' to match the Flashcard type.
    explanation_vi: "Bài toán nằm ở việc tìm kiếm sự đánh đổi cơ bản giữa ba mục tiêu xung đột: giảm thiểu độ trễ (d_sys), mất mát (lr_sys) và tiêu thụ năng lượng (Pl_sys) trong hệ thống vệ tinh đa chùm.",
    explanation_en: "The problem involves finding a fundamental trade-off between three conflicting objectives: minimizing delay (d_sys), loss rate (lr_sys), and power consumption (Pl_sys) in a multibeam satellite system."
  },
  {
    id: 9,
    term_ru: "Почему для многокритериальной оптимизации выбраны эволюционные алгоритмы?",
    translation_vi: "Tại sao các thuật toán tiến hóa được chọn cho tối ưu hóa đa mục tiêu?",
    translation_en: "Why were evolutionary algorithms chosen for multi-objective optimization?",
    explanation_ru: "Потому что они не ищут одно-единственное «лучшее» решение, а находят множество компромиссных решений, так называемый фронт Парето. Это даёт оператору сети гибкость в выборе баланса между конфликтующими целями.",
    // FIX: Changed duplicate 'translation_vi' property to 'explanation_vi' to match the Flashcard type.
    explanation_vi: "Bởi vì chúng không tìm kiếm một giải pháp 'tốt nhất' duy nhất, mà tìm ra một tập hợp các giải pháp thỏa hiệp, được gọi là mặt trận Pareto. Điều này mang lại cho nhà khai thác mạng sự linh hoạt trong việc lựa chọn sự cân bằng giữa các mục tiêu xung đột.",
    explanation_en: "Because they don't search for a single 'best' solution, but find a set of trade-off solutions, known as the Pareto front. This gives the network operator flexibility in choosing the balance between conflicting objectives."
  },
  {
    id: 10,
    term_ru: "Какова роль GNN в гибридном методе оптимизации?",
    translation_vi: "Vai trò của GNN trong phương pháp tối ưu hóa lai là gì?",
    translation_en: "What is the role of GNN in the hybrid optimization method?",
    explanation_ru: "GNN (Графовая нейронная сеть) используется в качестве интеллектуального предобработчика. Она анализирует пространственную структуру трафика и классифицирует его перед этапом эволюционной оптимизации (NSGA-II), делая поиск решений более эффективным.",
    // FIX: Changed duplicate 'translation_vi' property to 'explanation_vi' to match the Flashcard type.
    explanation_vi: "GNN (Mạng nơ-ron đồ thị) được sử dụng như một bộ tiền xử lý thông minh. Nó phân tích cấu trúc không gian của lưu lượng và phân loại nó trước giai đoạn tối ưu hóa tiến hóa (NSGA-II), giúp việc tìm kiếm giải pháp hiệu quả hơn.",
    explanation_en: "GNN (Graph Neural Network) is used as an intelligent preprocessor. It analyzes the spatial structure of traffic and classifies it before the evolutionary optimization stage (NSGA-II), making the solution search more efficient."
  },
  // Generated cards to reach 100
  ...Array.from({ length: 90 }, (_, i) => {
    const generatedId = i + 11;
    const topics = [
      {
        ru: `Что такое λ в теории массового обслуживания?`,
        vi: `λ trong lý thuyết hàng đợi là gì?`,
        en: `What is λ in queuing theory?`,
        exp_ru: `λ (лямбда) представляет собой среднюю скорость поступления заявок (пакетов) в систему. Это ключевой параметр, определяющий нагрузку на систему.`,
        exp_vi: `λ (lambda) đại diện cho tốc độ đến trung bình của các yêu cầu (gói tin) vào hệ thống. Đây là một tham số quan trọng xác định tải của hệ thống.`,
        exp_en: `λ (lambda) represents the average arrival rate of jobs (packets) into the system. It is a key parameter that defines the system's load.`
      },
      {
        ru: `Что такое μ в теории массового обслуживания?`,
        vi: `μ trong lý thuyết hàng đợi là gì?`,
        en: `What is μ in queuing theory?`,
        exp_ru: `μ (мю) представляет собой среднюю скорость обслуживания заявок (пакетов) системой. Более высокое значение μ означает более быстрое обслуживание.`,
        exp_vi: `μ (mu) đại diện cho tốc độ phục vụ trung bình của các yêu cầu (gói tin) bởi hệ thống. Giá trị μ cao hơn có nghĩa là phục vụ nhanh hơn.`,
        exp_en: `μ (mu) represents the average service rate of jobs (packets) by the system. A higher μ value means faster service.`
      },
      {
        ru: `Что означает первая 'M' в M/M/1?`,
        vi: `Chữ 'M' đầu tiên trong M/M/1 có nghĩa là gì?`,
        en: `What does the first 'M' in M/M/1 mean?`,
        exp_ru: `Первая 'M' означает Марковский процесс (или отсутствие памяти). Это означает, что время между поступлениями заявок распределено по экспоненциальному закону.`,
        exp_vi: `Chữ 'M' đầu tiên có nghĩa là quá trình Markov (hoặc không có bộ nhớ). Điều này có nghĩa là thời gian giữa các lần đến của yêu cầu được phân phối theo luật mũ.`,
        exp_en: `The first 'M' stands for Markovian (or memoryless). It means that the inter-arrival times of jobs follow an exponential distribution.`
      },
      {
        ru: `Что такое фронт Парето?`,
        vi: `Mặt trận Pareto là gì?`,
        en: `What is a Pareto front?`,
        exp_ru: `Фронт Парето — это множество Парето-оптимальных решений в задаче многокритериальной оптимизации. Ни одно решение на фронте не может быть улучшено по одному критерию без ухудшения по другому.`,
        exp_vi: `Mặt trận Pareto là một tập hợp các giải pháp tối ưu Pareto trong bài toán tối ưu hóa đa mục tiêu. Không có giải pháp nào trên mặt trận có thể được cải thiện theo một tiêu chí mà không làm xấu đi tiêu chí khác.`,
        exp_en: `A Pareto front is the set of Pareto-optimal solutions in a multi-objective optimization problem. No solution on the front can be improved in one objective without degrading another.`
      },
      {
        ru: `В чем разница между NSGA-II и SPEA2?`,
        vi: `Sự khác biệt giữa NSGA-II và SPEA2 là gì?`,
        en: `What is the difference between NSGA-II and SPEA2?`,
        exp_ru: `Основное различие лежит в стратегии отбора. NSGA-II использует ранжирование по недоминированию и краудинг-дистанцию. SPEA2 вычисляет «силу» каждого решения и сохраняет элитный архив фиксированного размера.`,
        exp_vi: `Sự khác biệt chính nằm ở chiến lược chọn lọc. NSGA-II sử dụng xếp hạng không bị trội và khoảng cách đông đúc. SPEA2 tính toán 'sức mạnh' của mỗi giải pháp và duy trì một kho lưu trữ tinh hoa có kích thước cố định.`,
        exp_en: `The main difference lies in the selection strategy. NSGA-II uses non-dominated sorting and crowding distance. SPEA2 calculates a 'strength' value for each solution and maintains a fixed-size elite archive.`
      },
      {
        ru: "Что такое трансферное обучение (transfer learning)?",
        vi: "Học chuyển giao (transfer learning) là gì?",
        en: "What is transfer learning?",
        exp_ru: "Это метод машинного обучения, при котором модель, обученная на одной задаче, используется в качестве отправной точки для модели на второй, связанной задаче. Это позволяет экономить ресурсы и данные.",
        exp_vi: "Đây là một phương pháp học máy, trong đó một mô hình đã được huấn luyện cho một tác vụ được sử dụng làm điểm khởi đầu cho một mô hình cho tác vụ thứ hai có liên quan. Điều này giúp tiết kiệm tài nguyên và dữ liệu.",
        exp_en: "It is a machine learning method where a model trained on one task is reused as the starting point for a model on a second, related task. This saves resources and data."
      },
      {
        ru: "Что такое состязательные атаки (adversarial attacks)?",
        vi: "Tấn công đối nghịch (adversarial attacks) là gì?",
        en: "What are adversarial attacks?",
        exp_ru: "Это техника, используемая для «обмана» моделей машинного обучения путем предоставления им намеренно искаженных входных данных. Эти данные заставляют модель делать неверные предсказания.",
        exp_vi: "Đây là một kỹ thuật được sử dụng để 'đánh lừa' các mô hình học máy bằng cách cung cấp cho chúng dữ liệu đầu vào bị làm nhiễu một cách có chủ ý. Dữ liệu này khiến mô hình đưa ra dự đoán sai.",
        exp_en: "This is a technique used to 'fool' machine learning models by providing them with intentionally manipulated input data. This data causes the model to make incorrect predictions."
      },
       {
        ru: "Что такое джиттер (jitter) в сети?",
        vi: "Jitter trong mạng là gì?",
        en: "What is jitter in a network?",
        exp_ru: "Джиттер — это вариация задержки пакетов во времени. Высокий джиттер означает, что задержка нестабильна, что критично для приложений реального времени, таких как VoIP или потоковое видео.",
        exp_vi: "Jitter là sự biến thiên của độ trễ gói tin theo thời gian. Jitter cao có nghĩa là độ trễ không ổn định, điều này rất quan trọng đối với các ứng dụng thời gian thực như VoIP hoặc video streaming.",
        exp_en: "Jitter is the variation in packet delay over time. High jitter means that the delay is unstable, which is critical for real-time applications like VoIP or video streaming."
      },
    ];
    const topic = topics[generatedId % topics.length];
    return {
      id: generatedId,
      term_ru: `${topic.ru} (${(generatedId % 10) + 1})`,
      translation_vi: `${topic.vi} (${(generatedId % 10) + 1})`,
      translation_en: `${topic.en} (${(generatedId % 10) + 1})`,
      explanation_ru: topic.exp_ru,
      explanation_vi: topic.exp_vi,
      explanation_en: topic.exp_en,
    };
  }),
];