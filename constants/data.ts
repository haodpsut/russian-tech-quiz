import { Flashcard } from '../types';

// The first 10 cards are high-quality and based on direct user input.
const coreFlashcards: Flashcard[] = [
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
    explanation_vi: "Bài toán nằm ở việc tìm kiếm sự đánh đổi cơ bản giữa ba mục tiêu xung đột: giảm thiểu độ trễ (d_sys), mất mát (lr_sys) và tiêu thụ năng lượng (Pl_sys) trong hệ thống vệ tinh đa chùm.",
    explanation_en: "The problem involves finding a fundamental trade-off between three conflicting objectives: minimizing delay (d_sys), loss rate (lr_sys), and power consumption (Pl_sys) in a multibeam satellite system."
  },
  {
    id: 9,
    term_ru: "Почему для многокритериальной оптимизации выбраны эволюционные алгоритмы?",
    translation_vi: "Tại sao các thuật toán tiến hóa được chọn cho tối ưu hóa đa mục tiêu?",
    translation_en: "Why were evolutionary algorithms chosen for multi-objective optimization?",
    explanation_ru: "Потому что они не ищут одно-единственное «лучшее» решение, а находят множество компромиссных решений, так называемый фронт Парето. Это даёт оператору сети гибкость в выборе баланса между конфликтующими целями.",
    explanation_vi: "Bởi vì chúng không tìm kiếm một giải pháp 'tốt nhất' duy nhất, mà tìm ra một tập hợp các giải pháp thỏa hiệp, được gọi là mặt trận Pareto. Điều này mang lại cho nhà khai thác mạng sự linh hoạt trong việc lựa chọn sự cân bằng giữa các mục tiêu xung đột.",
    explanation_en: "Because they don't search for a single 'best' solution, but find a set of trade-off solutions, known as the Pareto front. This gives the network operator flexibility in choosing the balance between conflicting objectives."
  },
  {
    id: 10,
    term_ru: "Какова роль GNN в гибридном методе оптимизации?",
    translation_vi: "Vai trò của GNN trong phương pháp tối ưu hóa lai là gì?",
    translation_en: "What is the role of GNN in the hybrid optimization method?",
    explanation_ru: "GNN (Графовая нейронная сеть) используется в качестве интеллектуального предобработчика. Она анализирует пространственную структуру трафика и классифицирует его перед этапом эволюционной оптимизации (NSGA-II), делая поиск решений более эффективным.",
    explanation_vi: "GNN (Mạng nơ-ron đồ thị) được sử dụng như một bộ tiền xử lý thông minh. Nó phân tích cấu trúc không gian của lưu lượng và phân loại nó trước giai đoạn tối ưu hóa tiến hóa (NSGA-II), giúp việc tìm kiếm giải pháp hiệu quả hơn.",
    explanation_en: "GNN (Graph Neural Network) is used as an intelligent preprocessor. It analyzes the spatial structure of traffic and classifies it before the evolutionary optimization stage (NSGA-II), making the solution search more efficient."
  },
];

// 90 additional unique cards based on the provided text.
const additionalFlashcards: Flashcard[] = [
    // Contribution 1 deep dive
    {
      id: 11,
      term_ru: "Научная новизна: механизм «прогноз → приоритизация»",
      translation_vi: "Tính mới khoa học: cơ chế «dự báo → ưu tiên hóa»",
      translation_en: "Scientific Novelty: the 'forecast → prioritization' mechanism",
      explanation_ru: "Научная новизна заключается в предложенном механизме, где выходные данные модели ИИ (прогноз типа трафика) напрямую используются как входной параметр для аналитической формулы, вычисляющей динамический приоритет пакетов в реальном времени.",
      explanation_vi: "Tính mới khoa học nằm ở cơ chế được đề xuất, trong đó dữ liệu đầu ra của mô hình AI (dự báo loại lưu lượng) được sử dụng trực tiếp làm tham số đầu vào cho một công thức phân tích tính toán độ ưu tiên động của các gói tin trong thời gian thực.",
      explanation_en: "The scientific novelty lies in the proposed mechanism where the output of an AI model (traffic type forecast) is directly used as an input parameter for an analytical formula that calculates the dynamic priority of packets in real-time."
    },
    {
      id: 12,
      term_ru: "Практическая значимость: снижение задержки и потерь",
      translation_vi: "Ý nghĩa thực tiễn: giảm độ trễ và mất mát",
      translation_en: "Practical Significance: reduction of latency and loss",
      explanation_ru: "Практическая значимость подхода подтверждена натурными испытаниями на реальном GEO-канале, которые показали снижение средней задержки до 19,6% и потерь пакетов до 19,42% по сравнению с базовыми алгоритмами.",
      explanation_vi: "Ý nghĩa thực tiễn của phương pháp đã được xác nhận qua các thử nghiệm thực tế trên kênh GEO thật, cho thấy sự sụt giảm độ trễ trung bình lên đến 19,6% và mất gói lên đến 19,42% so với các thuật toán cơ bản.",
      explanation_en: "The practical significance of the approach was confirmed by field tests on a real GEO channel, which showed a reduction in average latency of up to 19.6% and packet loss of up to 19.42% compared to baseline algorithms."
    },
    {
      id: 13,
      term_ru: "Типы трафика для классификации",
      translation_vi: "Các loại lưu lượng để phân loại",
      translation_en: "Traffic types for classification",
      explanation_ru: "Модель MLP классифицирует трафик по категориям, таким как потоковое видео, интерактивные данные, веб-трафик и передача файлов, чтобы присвоить им соответствующие уровни приоритета.",
      explanation_vi: "Mô hình MLP phân loại lưu lượng theo các danh mục như video streaming, dữ liệu tương tác, lưu lượng web và truyền tệp, để gán cho chúng các mức độ ưu tiên phù hợp.",
      explanation_en: "The MLP model classifies traffic into categories such as streaming video, interactive data, web traffic, and file transfer to assign them appropriate priority levels."
    },
    // Contribution 2 deep dive
    {
      id: 14,
      term_ru: "Фронт Парето: набор компромиссных решений",
      translation_vi: "Mặt trận Pareto: tập hợp các giải pháp thỏa hiệp",
      translation_en: "Pareto Front: a set of trade-off solutions",
      explanation_ru: "Фронт Парето представляет собой множество оптимальных решений, где улучшение одного критерия (например, снижение задержки) невозможно без ухудшения другого (например, увеличения энергопотребления).",
      explanation_vi: "Mặt trận Pareto đại diện cho một tập hợp các giải pháp tối ưu, nơi việc cải thiện một tiêu chí (ví dụ: giảm độ trễ) là không thể nếu không làm xấu đi một tiêu chí khác (ví dụ: tăng tiêu thụ năng lượng).",
      explanation_en: "The Pareto front represents a set of optimal solutions where improving one objective (e.g., reducing latency) is impossible without worsening another (e.g., increasing power consumption)."
    },
    {
      id: 15,
      term_ru: "Разница между NSGA-II и SPEA2",
      translation_vi: "Sự khác biệt giữa NSGA-II và SPEA2",
      translation_en: "Difference between NSGA-II and SPEA2",
      explanation_ru: "Ключевое различие лежит в стратегии отбора: NSGA-II ранжирует всю популяцию по уровням недоминирования, в то время как SPEA2 вычисляет «силу» каждого решения и сохраняет элиту в архиве.",
      explanation_vi: "Sự khác biệt chính nằm ở chiến lược chọn lọc: NSGA-II xếp hạng toàn bộ quần thể theo các cấp độ không bị trội, trong khi SPEA2 tính toán 'sức mạnh' của mỗi giải pháp và duy trì một nhóm tinh hoa trong kho lưu trữ.",
      explanation_en: "The key difference lies in the selection strategy: NSGA-II ranks the entire population into non-domination levels, whereas SPEA2 calculates a 'strength' for each solution and maintains an elite archive."
    },
    {
      id: 16,
      term_ru: "Моделирование в SimPy",
      translation_vi: "Mô phỏng trong SimPy",
      translation_en: "Simulation in SimPy",
      explanation_ru: "Имитационное моделирование в среде SimPy использовалось для дополнительной проверки эффективности принципа интеллектуального распределения ресурсов, показав снижение среднего времени ожидания в очереди на 35,1% для канала OFDM.",
      explanation_vi: "Mô phỏng trong môi trường SimPy được sử dụng để kiểm tra thêm hiệu quả của nguyên tắc phân bổ tài nguyên thông minh, cho thấy thời gian chờ đợi trung bình trong hàng đợi giảm 35,1% đối với kênh OFDM.",
      explanation_en: "Simulation in the SimPy environment was used to further verify the effectiveness of the intelligent resource allocation principle, showing a 35.1% reduction in average queue waiting time for an OFDM channel."
    },
    // Contribution 3 deep dive
    {
      id: 17,
      term_ru: "Роль ST-GNN в сжатии",
      translation_vi: "Vai trò của ST-GNN trong nén dữ liệu",
      translation_en: "The role of ST-GNN in compression",
      explanation_ru: "ST-GNN не сжимает данные напрямую. Она используется для вероятностного моделирования данных с учётом их пространственной и временной структуры, чтобы затем энтропийный кодер мог работать более эффективно.",
      explanation_vi: "ST-GNN không nén dữ liệu trực tiếp. Nó được sử dụng để mô hình hóa xác suất của dữ liệu, có tính đến cấu trúc không gian và thời gian của chúng, để sau đó bộ mã hóa entropy có thể hoạt động hiệu quả hơn.",
      explanation_en: "ST-GNN does not compress data directly. It is used for probabilistic modeling of data, considering their spatial and temporal structure, so that an entropy coder can then work more efficiently."
    },
    {
      id: 18,
      term_ru: "Техника скользящего окна",
      translation_vi: "Kỹ thuật cửa sổ trượt",
      translation_en: "Sliding window technique",
      explanation_ru: "Модель ST-GNN анализирует данные за предыдущие временные шаги, используя технику скользящего окна, чтобы спрогнозировать распределение вероятностей для данных на следующем шаге.",
      explanation_vi: "Mô hình ST-GNN phân tích dữ liệu từ các bước thời gian trước đó bằng kỹ thuật cửa sổ trượt để dự đoán phân phối xác suất cho dữ liệu ở bước tiếp theo.",
      explanation_en: "The ST-GNN model analyzes data from previous time steps using a sliding window technique to predict the probability distribution for the data at the next step."
    },
    {
      id: 19,
      term_ru: "Сравнение с GZIP",
      translation_vi: "So sánh với GZIP",
      translation_en: "Comparison with GZIP",
      explanation_ru: "При ухудшении канала общее время передачи для метода ST-GNN увеличилось всего на 11% по сравнению с 46% для GZIP, что доказывает его практическую устойчивость.",
      explanation_vi: "Khi kênh truyền xấu đi, tổng thời gian truyền cho phương pháp ST-GNN chỉ tăng 11% so với 46% của GZIP, điều này chứng tỏ khả năng phục hồi thực tế của nó.",
      explanation_en: "When the channel degraded, the total transmission time for the ST-GNN method increased by only 11% compared to 46% for GZIP, proving its practical resilience."
    },
    // General Concepts
    {
      id: 20,
      term_ru: "Что такое джиттер?",
      translation_vi: "Jitter là gì?",
      translation_en: "What is jitter?",
      explanation_ru: "Джиттер — это вариация задержки при передаче пакетов. Высокий джиттер негативно влияет на качество приложений реального времени, таких как VoIP или видеоконференции.",
      explanation_vi: "Jitter là sự biến thiên của độ trễ trong quá trình truyền gói tin. Jitter cao ảnh hưởng tiêu cực đến chất lượng của các ứng dụng thời gian thực như VoIP hoặc hội nghị truyền hình.",
      explanation_en: "Jitter is the variation in delay during packet transmission. High jitter negatively affects the quality of real-time applications such as VoIP or video conferencing."
    },
    {
      id: 21,
      term_ru: "Гибридный подход к развертыванию ИИ",
      translation_vi: "Phương pháp lai để triển khai AI",
      translation_en: "Hybrid approach to AI deployment",
      explanation_ru: "Ресурсоемкие задачи, как обучение моделей, выполняются на наземном центре, а на спутник загружается облегченная модель только для выполнения логических выводов (inference), что требует меньше ресурсов.",
      explanation_vi: "Các tác vụ đòi hỏi nhiều tài nguyên, như huấn luyện mô hình, được thực hiện tại trung tâm mặt đất, và một mô hình gọn nhẹ chỉ được tải lên vệ tinh để thực hiện suy luận (inference), đòi hỏi ít tài nguyên hơn.",
      explanation_en: "Resource-intensive tasks, like model training, are performed at a ground center, while a lightweight model is uploaded to the satellite only for inference, which requires fewer resources."
    },
    {
      id: 22,
      term_ru: "Что такое трансферное обучение?",
      translation_vi: "Học chuyển giao là gì?",
      translation_en: "What is transfer learning?",
      explanation_ru: "Это подход, при котором модель, обученная на одной задаче (например, на данных GEO-сети), дообучается (fine-tuning) на меньшем объеме данных для другой, связанной задачи (например, для LEO-сети).",
      explanation_vi: "Đây là một phương pháp trong đó một mô hình được huấn luyện cho một tác vụ (ví dụ: trên dữ liệu mạng GEO) được tinh chỉnh (fine-tuning) trên một lượng dữ liệu nhỏ hơn cho một tác vụ khác có liên quan (ví dụ: cho mạng LEO).",
      explanation_en: "This is an approach where a model trained on one task (e.g., on GEO network data) is fine-tuned on a smaller amount of data for another, related task (e.g., for a LEO network)."
    },
    {
      id: 23,
      term_ru: "Проблема «черного ящика» в ИИ",
      translation_vi: "Vấn đề 'hộp đen' trong AI",
      translation_en: "The 'black box' problem in AI",
      explanation_ru: "Многие сложные модели ИИ, как GNN, работают как «черный ящик», то есть их решения трудно интерпретировать. Для анализа можно использовать, например, механизмы внимания (attention mechanisms).",
      explanation_vi: "Nhiều mô hình AI phức tạp, như GNN, hoạt động như một 'hộp đen', nghĩa là các quyết định của chúng khó diễn giải. Để phân tích, có thể sử dụng các cơ chế như cơ chế chú ý (attention mechanisms).",
      explanation_en: "Many complex AI models, like GNNs, operate as a 'black box', meaning their decisions are difficult to interpret. For analysis, techniques like attention mechanisms can be used."
    },
    {
      id: 24,
      term_ru: "Альтернатива: Deep Reinforcement Learning (DRL)",
      translation_vi: "Giải pháp thay thế: Học tăng cường sâu (DRL)",
      translation_en: "Alternative: Deep Reinforcement Learning (DRL)",
      explanation_ru: "DRL является мощной альтернативой для задач динамического управления. В отличие от эволюционных алгоритмов, которые ищут набор решений, DRL обучает агента принимать оптимальные решения последовательно во времени.",
      explanation_vi: "DRL là một giải pháp thay thế mạnh mẽ cho các bài toán điều khiển động. Không giống như các thuật toán tiến hóa tìm kiếm một tập hợp các giải pháp, DRL huấn luyện một tác tử để đưa ra các quyết định tối ưu một cách tuần tự theo thời gian.",
      explanation_en: "DRL is a powerful alternative for dynamic control problems. Unlike evolutionary algorithms that search for a set of solutions, DRL trains an agent to make optimal decisions sequentially over time."
    },
    {
      id: 25,
      term_ru: "Кибербезопасность и состязательные атаки",
      translation_vi: "An ninh mạng và các cuộc tấn công đối nghịch",
      translation_en: "Cybersecurity and adversarial attacks",
      explanation_ru: "Это уязвимость ИИ-систем, когда злоумышленник намеренно создает искаженные входные данные, чтобы «обмануть» модель. Для защиты используется, например, состязательное обучение (adversarial training).",
      explanation_vi: "Đây là một lỗ hổng của các hệ thống AI, khi kẻ tấn công cố tình tạo ra dữ liệu đầu vào bị bóp méo để 'đánh lừa' mô hình. Để phòng thủ, có thể sử dụng các phương pháp như huấn luyện đối nghịch (adversarial training).",
      explanation_en: "This is a vulnerability of AI systems where an attacker intentionally creates distorted input data to 'fool' the model. For protection, methods like adversarial training are used."
    },
    {
      id: 26,
      term_ru: "Перспективы стандартизации ИИ в сетях",
      translation_vi: "Triển vọng tiêu chuẩn hóa AI trong mạng",
      translation_en: "Prospects for AI standardization in networks",
      explanation_ru: "Перспективы видятся в стандартизации не самих моделей, а интерфейсов (API) и форматов данных для них. Примером является функция NWDAF (Network Data Analytics Function) в архитектуре 3GPP для сетей 5G/6G.",
      explanation_vi: "Triển vọng nằm ở việc tiêu chuẩn hóa không phải bản thân các mô hình, mà là các giao diện (API) và định dạng dữ liệu cho chúng. Một ví dụ là chức năng NWDAF (Network Data Analytics Function) trong kiến trúc 3GPP cho mạng 5G/6G.",
      explanation_en: "Prospects are seen not in standardizing the models themselves, but the interfaces (APIs) and data formats for them. An example is the NWDAF (Network Data Analytics Function) in the 3GPP architecture for 5G/6G networks."
    },
    {
        id: 27,
        term_ru: "Что такое λ в теории массового обслуживания?",
        translation_vi: "λ trong lý thuyết hàng đợi là gì?",
        translation_en: "What is λ in queuing theory?",
        explanation_ru: "λ (лямбда) представляет собой среднюю скорость поступления заявок (пакетов) в систему. Это ключевой параметр, определяющий нагрузку на систему.",
        explanation_vi: "λ (lambda) đại diện cho tốc độ đến trung bình của các yêu cầu (gói tin) vào hệ thống. Đây là một tham số quan trọng xác định tải của hệ thống.",
        explanation_en: "λ (lambda) represents the average arrival rate of jobs (packets) into the system. It is a key parameter that defines the system's load."
    },
    {
        id: 28,
        term_ru: "Что такое μ в теории массового обслуживания?",
        translation_vi: "μ trong lý thuyết hàng đợi là gì?",
        translation_en: "What is μ in queuing theory?",
        explanation_ru: "μ (мю) представляет собой среднюю скорость обслуживания заявок (пакетов) системой. Более высокое значение μ означает более быстрое обслуживание.",
        explanation_vi: "μ (mu) đại diện cho tốc độ phục vụ trung bình của các yêu cầu (gói tin) bởi hệ thống. Giá trị μ cao hơn có nghĩa là phục vụ nhanh hơn.",
        explanation_en: "μ (mu) represents the average service rate of jobs (packets) by the system. A higher μ value means faster service."
    },
    {
        id: 29,
        term_ru: "Что означает первая 'M' в M/M/1?",
        translation_vi: "Chữ 'M' đầu tiên trong M/M/1 có nghĩa là gì?",
        translation_en: "What does the first 'M' in M/M/1 mean?",
        explanation_ru: "Первая 'M' означает Марковский процесс (или отсутствие памяти). Это означает, что время между поступлениями заявок распределено по экспоненциальному закону.",
        explanation_vi: "Chữ 'M' đầu tiên có nghĩa là quá trình Markov (hoặc không có bộ nhớ). Điều này có nghĩa là thời gian giữa các lần đến của yêu cầu được phân phối theo luật mũ.",
        explanation_en: "The first 'M' stands for Markovian (or memoryless). It means that the inter-arrival times of jobs follow an exponential distribution."
    },
     {
        id: 30,
        term_ru: "Что означает вторая 'M' в M/M/1?",
        translation_vi: "Chữ 'M' thứ hai trong M/M/1 có nghĩa là gì?",
        translation_en: "What does the second 'M' in M/M/1 mean?",
        explanation_ru: "Вторая 'M' также означает Марковский процесс. Это означает, что время обслуживания заявок распределено по экспоненциальному закону.",
        explanation_vi: "Chữ 'M' thứ hai cũng có nghĩa là quá trình Markov. Điều này có nghĩa là thời gian phục vụ yêu cầu được phân phối theo luật mũ.",
        explanation_en: "The second 'M' also stands for Markovian. It means that the service times of jobs follow an exponential distribution."
    },
    {
        id: 31,
        term_ru: "Что означает '1' в M/M/1?",
        translation_vi: "'1' trong M/M/1 có nghĩa là gì?",
        translation_en: "What does the '1' in M/M/1 mean?",
        explanation_ru: "Цифра '1' означает, что в системе есть только один сервер (или канал обслуживания) для обработки заявок.",
        explanation_vi: "Số '1' có nghĩa là hệ thống chỉ có một máy chủ (hoặc kênh phục vụ) để xử lý các yêu cầu.",
        explanation_en: "The number '1' means that there is only one server (or service channel) in the system to process jobs."
    },
    {
        id: 32,
        term_ru: "Актуальность темы исследования",
        translation_vi: "Tính cấp thiết của đề tài nghiên cứu",
        translation_en: "Relevance of the research topic",
        explanation_ru: "Актуальность обусловлена необходимостью обработки растущих объёмов данных и обеспечения глобального покрытия, где ИИ открывает новые возможности для оптимизации гибридных сетей.",
        explanation_vi: "Tính cấp thiết được thúc đẩy bởi nhu cầu xử lý khối lượng dữ liệu ngày càng tăng và đảm bảo vùng phủ sóng toàn cầu, nơi AI mở ra những cơ hội mới để tối ưu hóa các mạng lai.",
        explanation_en: "The relevance is driven by the need to process growing data volumes and ensure global coverage, where AI opens new opportunities for optimizing hybrid networks."
    },
    {
        id: 33,
        term_ru: "Цель работы",
        translation_vi: "Mục tiêu của công trình",
        translation_en: "Goal of the work",
        explanation_ru: "Цель работы заключается в разработке и исследовании моделей и методов на основе технологий ИИ для минимизации сетевой задержки.",
        explanation_vi: "Mục tiêu của công trình là phát triển và nghiên cứu các mô hình và phương pháp dựa trên công nghệ AI để giảm thiểu độ trễ mạng.",
        explanation_en: "The goal of the work is to develop and research models and methods based on AI technologies to minimize network latency."
    },
    {
        id: 34,
        term_ru: "Объект и предмет исследования",
        translation_vi: "Đối tượng và chủ thể nghiên cứu",
        translation_en: "Object and Subject of research",
        explanation_ru: "Объект: спутниковый канал связи. Предмет: методы и алгоритмы уменьшения задержки с помощью ИИ.",
        explanation_vi: "Đối tượng: kênh liên lạc vệ tinh. Chủ thể: các phương pháp và thuật toán giảm độ trễ bằng AI.",
        explanation_en: "Object: satellite communication channel. Subject: methods and algorithms for latency reduction using AI."
    },
     {
        id: 35,
        term_ru: "Квантование и прунинг моделей",
        translation_vi: "Lượng tử hóa và cắt tỉa mô hình",
        translation_en: "Model quantization and pruning",
        explanation_ru: "Это методы оптимизации моделей ИИ для уменьшения их размера и вычислительной сложности, что критично для развертывания на устройствах с ограниченными ресурсами, таких как спутники или терминалы.",
        explanation_vi: "Đây là những phương pháp tối ưu hóa các mô hình AI để giảm kích thước và độ phức tạp tính toán của chúng, điều này rất quan trọng để triển khai trên các thiết bị có tài nguyên hạn chế như vệ tinh hoặc thiết bị đầu cuối.",
        explanation_en: "These are methods for optimizing AI models to reduce their size and computational complexity, which is critical for deployment on resource-constrained devices like satellites or terminals."
    },
    {
        id: 36,
        term_ru: "Робастная оптимизация",
        translation_vi: "Tối ưu hóa bền vững",
        translation_en: "Robust optimization",
        explanation_ru: "Это подход к оптимизации, направленный на поиск решений, которые остаются хорошими при наличии неопределенности во входных данных. Он дополняет методы, ищущие фронт Парето, помогая выбрать наиболее стабильное решение.",
        explanation_vi: "Đây là một phương pháp tối ưu hóa nhằm tìm kiếm các giải pháp vẫn tốt khi có sự không chắc chắn trong dữ liệu đầu vào. Nó bổ sung cho các phương pháp tìm kiếm mặt trận Pareto bằng cách giúp chọn ra giải pháp ổn định nhất.",
        explanation_en: "This is an optimization approach aimed at finding solutions that remain good under uncertainty in the input data. It complements Pareto front-finding methods by helping to select the most stable solution."
    },
    {
        id: 37,
        term_ru: "Энтропийное кодирование",
        translation_vi: "Mã hóa Entropy",
        translation_en: "Entropy Encoding",
        explanation_ru: "Класс методов сжатия данных без потерь, который присваивает более короткие коды более вероятным символам и более длинные коды менее вероятным. Работает в паре с предсказателем ST-GNN.",
        explanation_vi: "Một lớp các phương pháp nén dữ liệu không mất mát gán các mã ngắn hơn cho các ký hiệu có xác suất cao hơn và các mã dài hơn cho các ký hiệu có xác suất thấp hơn. Nó hoạt động song song với bộ dự báo ST-GNN.",
        explanation_en: "A class of lossless data compression methods that assigns shorter codes to more probable symbols and longer codes to less probable symbols. It works in tandem with the ST-GNN predictor."
    },
    {
        id: 38,
        term_ru: "Многолучевая спутниковая система",
        translation_vi: "Hệ thống vệ tinh đa chùm",
        translation_en: "Multibeam Satellite System",
        explanation_ru: "Спутниковая система, в которой один спутник обслуживает множество ячеек на земле с помощью отдельных лучей, что требует сложной координации ресурсов.",
        explanation_vi: "Một hệ thống vệ tinh trong đó một vệ tinh phục vụ nhiều ô trên mặt đất bằng các chùm tia riêng biệt, đòi hỏi sự phối hợp tài nguyên phức tạp.",
        explanation_en: "A satellite system where one satellite serves multiple cells on the ground using separate beams, which requires complex resource coordination."
    },
    {
        id: 39,
        term_ru: "Целевая функция G",
        translation_vi: "Hàm mục tiêu G",
        translation_en: "Objective Function G",
        explanation_ru: "Фундаментальный компромисс между тремя целями: низкой задержкой (d_sys), малым количеством потерь (lr_sys) и низким энергопотреблением (Pl_sys).",
        explanation_vi: "Sự đánh đổi cơ bản giữa ba mục tiêu: độ trễ thấp (d_sys), tỷ lệ mất mát thấp (lr_sys) và tiêu thụ năng lượng thấp (Pl_sys).",
        explanation_en: "A fundamental trade-off between three objectives: low latency (d_sys), low loss rate (lr_sys), and low power consumption (Pl_sys)."
    },
    {
        id: 40,
        term_ru: "Управляемая переменная: x_t^n",
        translation_vi: "Biến điều khiển: x_t^n",
        translation_en: "Control Variable: x_t^n",
        explanation_ru: "Переключатель 'включить/выключить' для каждого луча в многолучевой системе, одна из переменных в задаче оптимизации.",
        explanation_vi: "Công tắc 'bật/tắt' cho mỗi chùm tia trong hệ thống đa chùm, một trong những biến trong bài toán tối ưu hóa.",
        explanation_en: "An 'on/off' switch for each beam in the multibeam system, one of the variables in the optimization problem."
    },
    {
        id: 41,
        term_ru: "Управляемая переменная: P_t^k",
        translation_vi: "Biến điều khiển: P_t^k",
        translation_en: "Control Variable: P_t^k",
        explanation_ru: "Количество мощности, выделяемое для каждого луча. Является ключевой переменной для управления качеством связи и энергопотреблением.",
        explanation_vi: "Lượng công suất được phân bổ cho mỗi chùm tia. Là một biến quan trọng để quản lý chất lượng liên kết và tiêu thụ năng lượng.",
        explanation_en: "The amount of power allocated to each beam. It is a key variable for managing link quality and power consumption."
    },
    {
        id: 42,
        term_ru: "Управляемая переменная: B^n",
        translation_vi: "Biến điều khiển: B^n",
        translation_en: "Control Variable: B^n",
        explanation_ru: "Полоса пропускания, предоставляемая каждому лучу. Влияет на максимальную скорость передачи данных.",
        explanation_vi: "Băng thông được cấp cho mỗi chùm tia. Ảnh hưởng đến tốc độ dữ liệu tối đa.",
        explanation_en: "The bandwidth provided to each beam. It affects the maximum data rate."
    },
    {
        id: 43,
        term_ru: "Динамическое уравнение для длины очереди",
        translation_vi: "Phương trình động cho độ dài hàng đợi",
        translation_en: "Dynamic Equation for Queue Length",
        explanation_ru: "Φ_t^n = Φ_{t-1}^n + (новые поступления) - (обслуженные пакеты). Это уравнение моделирует изменение длины очереди во времени.",
        explanation_vi: "Φ_t^n = Φ_{t-1}^n + (lượt đến mới) - (gói đã phục vụ). Phương trình này mô hình hóa sự thay đổi độ dài hàng đợi theo thời gian.",
        explanation_en: "Φ_t^n = Φ_{t-1}^n + (new arrivals) - (serviced packets). This equation models the change in queue length over time."
    },
    {
        id: 44,
        term_ru: "Основные этапы эволюционного алгоритма",
        translation_vi: "Các giai đoạn chính của thuật toán tiến hóa",
        translation_en: "Main stages of an evolutionary algorithm",
        explanation_ru: "Включают такие этапы, как отбор (выбор лучших решений), скрещивание (комбинация решений) и мутация (случайное изменение решений для поддержания разнообразия).",
        explanation_vi: "Bao gồm các giai đoạn như chọn lọc (lựa chọn các giải pháp tốt nhất), lai ghép (kết hợp các giải pháp) và đột biến (thay đổi ngẫu nhiên các giải pháp để duy trì sự đa dạng).",
        explanation_en: "Includes stages such as selection (choosing the best solutions), crossover (combining solutions), and mutation (randomly changing solutions to maintain diversity)."
    },
    {
        id: 45,
        term_ru: "Архитектура предсказателя ST-GNN",
        translation_vi: "Kiến trúc của bộ dự báo ST-GNN",
        translation_en: "Architecture of the ST-GNN predictor",
        explanation_ru: "Состоит из двух ключевых компонентов: MLP для извлечения признаков из данных каждого узла и RNN для агрегации информации от соседних узлов и прогнозирования.",
        explanation_vi: "Bao gồm hai thành phần chính: MLP để trích xuất các đặc trưng từ dữ liệu của mỗi nút và RNN để tổng hợp thông tin từ các nút lân cận và dự báo.",
        explanation_en: "Consists of two key components: an MLP for extracting features from each node's data and an RNN for aggregating information from neighboring nodes and making predictions."
    },
    {
        id: 46,
        term_ru: "GEO-модем и диагностика канала",
        translation_vi: "Modem GEO và chẩn đoán kênh",
        translation_en: "GEO modem and channel diagnostics",
        explanation_ru: "Реальный эксперимент использовал GEO-модем для подтверждения высокой задержки спутниковой линии (в среднем около 800 мс), что доказывает актуальность задачи.",
        explanation_vi: "Thí nghiệm thực tế đã sử dụng modem GEO để xác nhận độ trễ cao của đường truyền vệ tinh (trung bình khoảng 800 ms), chứng tỏ tính cấp thiết của bài toán.",
        explanation_en: "The real experiment used a GEO modem to confirm the high latency of the satellite link (around 800 ms on average), proving the relevance of the problem."
    },
    {
        id: 47,
        term_ru: "Оценка устойчивости к росту RTT",
        translation_vi: "Đánh giá khả năng chống chịu với sự gia tăng RTT",
        translation_en: "Resilience assessment to RTT growth",
        explanation_ru: "При росте RTT, время передачи с Gzip выросло на 46%, в то время как с предложенным методом ST-GNN — всего на 11%.",
        explanation_vi: "Khi RTT tăng, thời gian truyền với Gzip tăng 46%, trong khi với phương pháp ST-GNN được đề xuất chỉ tăng 11%.",
        explanation_en: "With an increase in RTT, the transmission time with Gzip grew by 46%, while with the proposed ST-GNN method, it grew by only 11%."
    },
    {
        id: 48,
        term_ru: "Интеллектуальное управление потоками трафика",
        translation_vi: "Quản lý luồng lưu lượng thông minh",
        translation_en: "Intelligent traffic flow management",
        explanation_ru: "Задача решена с помощью модели на основе MLP, которая прогнозирует и динамически приоритизирует данные для минимизации задержки.",
        explanation_vi: "Bài toán được giải quyết bằng một mô hình dựa trên MLP, giúp dự báo và ưu tiên hóa dữ liệu một cách linh hoạt để giảm thiểu độ trễ.",
        explanation_en: "The problem was solved using an MLP-based model that predicts and dynamically prioritizes data to minimize latency."
    },
    {
        id: 49,
        term_ru: "Оптимизация на макро- и микроуровне",
        translation_vi: "Tối ưu hóa ở cấp độ vĩ mô và vi mô",
        translation_en: "Macro- and micro-level optimization",
        explanation_ru: "Методы GNN оптимизируют распределение ресурсов на макроуровне (между лучами), а модель MLP управляет очередями на микроуровне (внутри одного канала).",
        explanation_vi: "Các phương pháp GNN tối ưu hóa việc phân bổ tài nguyên ở cấp độ vĩ mô (giữa các chùm tia), trong khi mô hình MLP quản lý hàng đợi ở cấp độ vi mô (bên trong một kênh).",
        explanation_en: "GNN methods optimize resource allocation at the macro-level (between beams), while the MLP model manages queues at the micro-level (within a single channel)."
    },
    {
        id: 50,
        term_ru: "Интерпретируемость через механизмы внимания",
        translation_vi: "Khả năng diễn giải thông qua cơ chế chú ý",
        translation_en: "Interpretability via attention mechanisms",
        explanation_ru: "Механизмы внимания (attention mechanisms) могут использоваться для определения, какие узлы и связи в графе оказали наибольшее влияние на решение модели GNN.",
        explanation_vi: "Cơ chế chú ý (attention mechanisms) có thể được sử dụng để xác định những nút và liên kết nào trong đồ thị đã có ảnh hưởng lớn nhất đến quyết định của mô hình GNN.",
        explanation_en: "Attention mechanisms can be used to determine which nodes and links in the graph had the most influence on the GNN model's decision."
    },
    {
        id: 51,
        term_ru: "Применимость методов для LEO-систем",
        translation_vi: "Khả năng áp dụng các phương pháp cho hệ thống LEO",
        translation_en: "Applicability of methods for LEO systems",
        explanation_ru: "Подходы актуальны для динамичных LEO-систем, но потребуют адаптации моделей для работы в режиме онлайн-обучения или более частого переобучения.",
        explanation_vi: "Các phương pháp này phù hợp cho các hệ thống LEO động, nhưng sẽ yêu cầu điều chỉnh các mô hình để hoạt động ở chế độ học trực tuyến hoặc huấn luyện lại thường xuyên hơn.",
        explanation_en: "The approaches are relevant for dynamic LEO systems but will require adapting the models to operate in an online-learning or more frequent retraining mode."
    },
    {
        id: 52,
        term_ru: "Компромисс: задержка и энергопотребление",
        translation_vi: "Sự đánh đổi: độ trễ và tiêu thụ năng lượng",
        translation_en: "Trade-off: latency and power consumption",
        explanation_ru: "Это фундаментальный компромисс в сетевой оптимизации. Минимизация задержки часто требует большего энергопотребления для увеличения мощности передачи или скорости обработки.",
        explanation_vi: "Đây là một sự đánh đổi cơ bản trong tối ưu hóa mạng. Việc giảm thiểu độ trễ thường đòi hỏi tiêu thụ nhiều năng lượng hơn để tăng công suất truyền hoặc tốc độ xử lý.",
        explanation_en: "This is a fundamental trade-off in network optimization. Minimizing latency often requires more power consumption to increase transmission power or processing speed."
    },
    {
        id: 53,
        term_ru: "Функция NWDAF в архитектуре 3GPP",
        translation_vi: "Chức năng NWDAF trong kiến trúc 3GPP",
        translation_en: "NWDAF function in the 3GPP architecture",
        explanation_ru: "NWDAF (Network Data Analytics Function) — это функция в сетях 5G/6G, которая создает основу для интеллектуального управления сетью, собирая и анализируя данные.",
        explanation_vi: "NWDAF (Network Data Analytics Function) là một chức năng trong mạng 5G/6G tạo nền tảng cho việc quản lý mạng thông minh bằng cách thu thập và phân tích dữ liệu.",
        explanation_en: "NWDAF (Network Data Analytics Function) is a function in 5G/6G networks that creates the foundation for intelligent network management by collecting and analyzing data."
    },
    {
        id: 54,
        term_ru: "Теоретический предел сжатия Шеннона",
        translation_vi: "Giới hạn nén lý thuyết của Shannon",
        translation_en: "Shannon's theoretical compression limit",
        explanation_ru: "Фундаментальный предел в теории информации, определяющий минимальное среднее количество бит на символ, необходимое для кодирования источника. Достижение этого предела является целью алгоритмов сжатия.",
        explanation_vi: "Một giới hạn cơ bản trong lý thuyết thông tin, xác định số bit trung bình tối thiểu trên mỗi ký hiệu cần thiết để mã hóa một nguồn. Đạt được giới hạn này là mục tiêu của các thuật toán nén.",
        explanation_en: "A fundamental limit in information theory defining the minimum average number of bits per symbol required to encode a source. Achieving this limit is the goal of compression algorithms."
    },
    {
        id: 55,
        term_ru: "Анализ чувствительности моделей к данным",
        translation_vi: "Phân tích độ nhạy của mô hình với dữ liệu",
        translation_en: "Analysis of model sensitivity to data",
        explanation_ru: "Исследование того, как изменяется производительность модели при изменении объема или качества обучающих данных. Важно для подтверждения стабильности модели.",
        explanation_vi: "Nghiên cứu về cách hiệu suất của mô hình thay đổi khi khối lượng hoặc chất lượng của dữ liệu huấn luyện thay đổi. Quan trọng để xác nhận sự ổn định của mô hình.",
        explanation_en: "An investigation of how a model's performance changes with variations in the volume or quality of the training data. Important for confirming model stability."
    },
    {
        id: 56,
        term_ru: "Вычислительная сложность как вызов",
        translation_vi: "Độ phức tạp tính toán như một thách thức",
        translation_en: "Computational complexity as a challenge",
        explanation_ru: "Сложные модели ИИ требуют значительных вычислительных ресурсов, что является проблемой при масштабировании и развертывании в реальном времени.",
        explanation_vi: "Các mô hình AI phức tạp đòi hỏi tài nguyên tính toán đáng kể, đây là một vấn đề khi mở rộng quy mô và triển khai trong thời gian thực.",
        explanation_en: "Complex AI models require significant computational resources, which is a challenge for scaling and real-time deployment."
    },
    {
        id: 57,
        term_ru: "Накладные расходы на сбор данных",
        translation_vi: "Chi phí phát sinh cho việc thu thập dữ liệu",
        translation_en: "Overhead of data collection",
        explanation_ru: "Процесс сбора данных, необходимых для обучения моделей ИИ, сам по себе может создавать дополнительную нагрузку на сеть.",
        explanation_vi: "Quá trình thu thập dữ liệu cần thiết để huấn luyện các mô hình AI có thể tự nó tạo ra gánh nặng bổ sung cho mạng.",
        explanation_en: "The process of collecting the data needed to train AI models can itself create additional load on the network."
    },
    {
        id: 58,
        term_ru: "Децентрализованный подход к управлению",
        translation_vi: "Phương pháp quản lý phi tập trung",
        translation_en: "Decentralized management approach",
        explanation_ru: "Подход, при котором решения по управлению принимаются локально на узлах сети, а не в одном центральном пункте, что повышает масштабируемость и отказоустойчивость.",
        explanation_vi: "Một phương pháp trong đó các quyết định quản lý được đưa ra cục bộ tại các nút mạng thay vì tại một điểm trung tâm duy nhất, giúp tăng khả năng mở rộng và khả năng chịu lỗi.",
        explanation_en: "An approach where management decisions are made locally at network nodes rather than at a single central point, which improves scalability and fault tolerance."
    },
    {
        id: 59,
        term_ru: "Компоненты общей задержки",
        translation_vi: "Các thành phần của tổng độ trễ",
        translation_en: "Components of total latency",
        explanation_ru: "Общая задержка состоит из нескольких компонентов, включая задержку в очереди (время ожидания обработки) и задержку передачи (время на передачу данных по каналу).",
        explanation_vi: "Tổng độ trễ bao gồm một số thành phần, bao gồm độ trễ hàng đợi (thời gian chờ xử lý) và độ trễ truyền dẫn (thời gian để truyền dữ liệu qua kênh).",
        explanation_en: "Total latency consists of several components, including queuing delay (time waiting to be processed) and transmission delay (time to transmit data over the channel)."
    },
    {
        id: 60,
        term_ru: "«Золотой стандарт» в многокритериальной оптимизации",
        translation_vi: "Tiêu chuẩn vàng trong tối ưu hóa đa mục tiêu",
        translation_en: "'Gold standard' in multi-objective optimization",
        explanation_ru: "Алгоритмы, такие как NSGA-II и SPEA2, считаются «золотым стандартом», так как они хорошо изучены и доказывали свою эффективность во многих задачах.",
        explanation_vi: "Các thuật toán như NSGA-II và SPEA2 được coi là 'tiêu chuẩn vàng' vì chúng đã được nghiên cứu kỹ lưỡng và đã chứng minh hiệu quả trong nhiều bài toán.",
        explanation_en: "Algorithms like NSGA-II and SPEA2 are considered the 'gold standard' as they are well-studied and have proven their effectiveness in many problems."
    },
    {
        id: 61,
        term_ru: "Онлайн-обучение (online-learning)",
        translation_vi: "Học trực tuyến (online-learning)",
        translation_en: "Online learning",
        explanation_ru: "Режим обучения модели, при котором она обновляется постепенно по мере поступления новых данных. Это необходимо для адаптации к быстро меняющимся условиям, как в LEO-сетях.",
        explanation_vi: "Chế độ huấn luyện mô hình trong đó nó được cập nhật dần dần khi có dữ liệu mới. Điều này cần thiết để thích ứng với các điều kiện thay đổi nhanh chóng, như trong các mạng LEO.",
        explanation_en: "A model training mode where it is updated incrementally as new data arrives. This is necessary for adapting to rapidly changing conditions, such as in LEO networks."
    },
    {
        id: 62,
        term_ru: "Синергетический эффект",
        translation_vi: "Hiệu ứng cộng hưởng",
        translation_en: "Synergistic effect",
        explanation_ru: "Эффект, возникающий при совместной работе нескольких методов, когда результат их взаимодействия превосходит простую сумму эффектов от каждого метода в отдельности.",
        explanation_vi: "Hiệu ứng xảy ra khi nhiều phương pháp hoạt động cùng nhau, khi kết quả của sự tương tác của chúng vượt qua tổng đơn giản của các hiệu ứng từ mỗi phương pháp riêng lẻ.",
        explanation_en: "An effect that occurs when multiple methods work together, where the result of their interaction exceeds the simple sum of the effects from each method individually."
    },
    {
        id: 63,
        term_ru: "Развертывание в реальном времени (inference)",
        translation_vi: "Triển khai thời gian thực (inference)",
        translation_en: "Real-time deployment (inference)",
        explanation_ru: "Процесс использования уже обученной модели ИИ для выполнения предсказаний на новых данных. Этот этап обычно менее требователен к ресурсам, чем обучение.",
        explanation_vi: "Quá trình sử dụng một mô hình AI đã được huấn luyện để thực hiện các dự đoán trên dữ liệu mới. Giai đoạn này thường ít đòi hỏi tài nguyên hơn so với việc huấn luyện.",
        explanation_en: "The process of using a pre-trained AI model to make predictions on new data. This stage is typically less resource-intensive than training."
    },
    {
        id: 64,
        term_ru: "Устойчивость GNN к динамическим изменениям",
        translation_vi: "Khả năng chống chịu của GNN với những thay đổi động",
        translation_en: "Resilience of GNN to dynamic changes",
        explanation_ru: "Графовые нейронные сети по своей природе хорошо адаптируются к изменениям в топологии сети или качестве связей, так как они напрямую моделируют структуру графа.",
        explanation_vi: "Mạng nơ-ron đồ thị về bản chất thích ứng tốt với những thay đổi về cấu trúc liên kết mạng hoặc chất lượng liên kết, vì chúng mô hình hóa trực tiếp cấu trúc đồ thị.",
        explanation_en: "Graph Neural Networks, by their nature, adapt well to changes in network topology or link quality because they directly model the graph structure."
    },
    {
        id: 65,
        term_ru: "Влияние на джиттер",
        translation_vi: "Tác động lên jitter",
        translation_en: "Impact on jitter",
        explanation_ru: "Стабильная приоритизация трафика с помощью MLP и предсказуемое управление ресурсами с помощью GNN косвенно способствуют снижению джиттера (вариации задержки).",
        explanation_vi: "Việc ưu tiên hóa lưu lượng ổn định bằng MLP và quản lý tài nguyên có thể dự đoán bằng GNN gián tiếp góp phần làm giảm jitter (sự biến thiên của độ trễ).",
        explanation_en: "Stable traffic prioritization using MLP and predictable resource management using GNN indirectly contribute to reducing jitter (delay variation)."
    },
    {
        id: 66,
        term_ru: "Аппаратные требования",
        translation_vi: "Yêu cầu phần cứng",
        translation_en: "Hardware requirements",
        explanation_ru: "Для обучения моделей требуется производительный GPU, но для работы в реальном времени (inference) достаточно современного CPU или специализированного AI-ускорителя.",
        explanation_vi: "Để huấn luyện các mô hình, cần có GPU hiệu năng cao, nhưng để hoạt động trong thời gian thực (inference), một CPU hiện đại hoặc một bộ tăng tốc AI chuyên dụng là đủ.",
        explanation_en: "Training models requires a powerful GPU, but for real-time operation (inference), a modern CPU or a specialized AI accelerator is sufficient."
    },
    {
        id: 67,
        term_ru: "Устойчивость к «замираниям» из-за дождя",
        translation_vi: "Khả năng chống chịu với 'suy hao' do mưa",
        translation_en: "Resilience to rain fade",
        explanation_ru: "Модели, обученные на реальных данных, уже содержат флуктуации, свойственные реальным каналам, что повышает их устойчивость к погодным условиям.",
        explanation_vi: "Các mô hình được huấn luyện trên dữ liệu thực tế đã bao gồm những biến động đặc trưng của các kênh thực, giúp tăng cường khả năng chống chịu với điều kiện thời tiết.",
        explanation_en: "Models trained on real data already contain fluctuations characteristic of real channels, which enhances their resilience to weather conditions."
    },
    {
        id: 68,
        term_ru: "Основная нагрузка на сетевой шлюз",
        translation_vi: "Gánh nặng chính trên cổng kết nối mạng",
        translation_en: "Main load on the network gateway",
        explanation_ru: "Предложенная архитектура предполагает, что основная вычислительная нагрузка (обучение, сложный inference) ложится на сетевой шлюз, а не на абонентские терминалы.",
        explanation_vi: "Kiến trúc được đề xuất giả định rằng gánh nặng tính toán chính (huấn luyện, suy luận phức tạp) thuộc về cổng kết nối mạng, chứ không phải các thiết bị đầu cuối của thuê bao.",
        explanation_en: "The proposed architecture assumes that the main computational load (training, complex inference) falls on the network gateway, not on subscriber terminals."
    },
    {
        id: 69,
        term_ru: "Анализ устойчивости замкнутых контуров",
        translation_vi: "Phân tích tính ổn định của vòng lặp kín",
        translation_en: "Stability analysis of closed loops",
        explanation_ru: "Строгий теоретический анализ устойчивости систем с ИИ в контуре управления является сложной задачей, но эмпирически устойчивость была подтверждена моделированием.",
        explanation_vi: "Phân tích lý thuyết chặt chẽ về tính ổn định của các hệ thống có AI trong vòng điều khiển là một nhiệm vụ phức tạp, nhưng tính ổn định đã được xác nhận bằng thực nghiệm thông qua mô phỏng.",
        explanation_en: "A rigorous theoretical stability analysis of systems with AI in the control loop is a complex task, but stability has been empirically confirmed through simulation."
    },
    {
        id: 70,
        term_ru: "Состязательное обучение (Adversarial training)",
        translation_vi: "Huấn luyện đối nghịch (Adversarial training)",
        translation_en: "Adversarial training",
        explanation_ru: "Метод повышения устойчивости модели к состязательным атакам, при котором модель обучается на примерах, специально созданных для её «обмана».",
        explanation_vi: "Một phương pháp tăng cường khả năng chống chịu của mô hình trước các cuộc tấn công đối nghịch, trong đó mô hình được huấn luyện trên các ví dụ được tạo ra đặc biệt để 'đánh lừa' nó.",
        explanation_en: "A method of enhancing a model's resilience to adversarial attacks, where the model is trained on examples specifically crafted to 'fool' it."
    },
    {
        id: 71,
        term_ru: "Ансамбли моделей для защиты",
        translation_vi: "Tổ hợp mô hình để phòng thủ",
        translation_en: "Model ensembles for defense",
        explanation_ru: "Использование нескольких различных моделей для принятия одного решения. «Обмануть» целый ансамбль сложнее, чем одну модель.",
        explanation_vi: "Sử dụng nhiều mô hình khác nhau để đưa ra một quyết định duy nhất. 'Đánh lừa' cả một tổ hợp sẽ khó hơn là một mô hình đơn lẻ.",
        explanation_en: "Using several different models to make a single decision. It is harder to 'fool' an entire ensemble than a single model."
    },
    {
        id: 72,
        term_ru: "Политика сетевого оператора",
        translation_vi: "Chính sách của nhà khai thác mạng",
        translation_en: "Network operator policy",
        explanation_ru: "Набор правил, определяющих, как выбирать конкретное рабочее решение из множества Парето-оптимальных решений (например, «минимальная задержка, пока потери < 0.1%»).",
        explanation_vi: "Một bộ quy tắc xác định cách chọn một giải pháp hoạt động cụ thể từ tập hợp các giải pháp tối ưu Pareto (ví dụ: 'độ trễ tối thiểu miễn là tỷ lệ mất mát < 0,1%').",
        explanation_en: "A set of rules that defines how to select a specific operating solution from the set of Pareto-optimal solutions (e.g., 'minimum latency as long as loss < 0.1%')."
    },
    {
        id: 73,
        term_ru: "Гибридная спутниково-наземная сеть",
        translation_vi: "Mạng lai vệ tinh-mặt đất",
        translation_en: "Hybrid satellite-terrestrial network",
        explanation_ru: "Сеть, объединяющая спутниковые и наземные каналы связи для обеспечения глобального покрытия и высокой пропускной способности.",
        explanation_vi: "Một mạng kết hợp các kênh liên lạc vệ tinh và mặt đất để cung cấp vùng phủ sóng toàn cầu và băng thông cao.",
        explanation_en: "A network that combines satellite and terrestrial communication channels to provide global coverage and high bandwidth."
    },
    {
        id: 74,
        term_ru: "Проактивное прогнозирование",
        translation_vi: "Dự báo chủ động",
        translation_en: "Proactive forecasting",
        explanation_ru: "Способность системы предсказывать будущее состояние (например, тип трафика) и принимать упреждающие меры, а не реагировать на уже произошедшие события.",
        explanation_vi: "Khả năng của hệ thống dự đoán trạng thái tương lai (ví dụ: loại lưu lượng) và thực hiện các biện pháp phòng ngừa, thay vì phản ứng với các sự kiện đã xảy ra.",
        explanation_en: "The ability of a system to predict a future state (e.g., traffic type) and take preemptive action, rather than reacting to events that have already occurred."
    },
    {
        id: 75,
        term_ru: "Реактивная vs. Проактивная система",
        translation_vi: "Hệ thống Bị động vs. Chủ động",
        translation_en: "Reactive vs. Proactive System",
        explanation_ru: "Реактивная система реагирует на проблемы после их возникновения. Проактивная система, используя ИИ, предсказывает и предотвращает проблемы до их появления.",
        explanation_vi: "Một hệ thống bị động phản ứng với các vấn đề sau khi chúng xảy ra. Một hệ thống chủ động, sử dụng AI, dự đoán và ngăn chặn các vấn đề trước khi chúng xuất hiện.",
        explanation_en: "A reactive system responds to problems after they occur. A proactive system, using AI, predicts and prevents problems before they arise."
    },
    {
        id: 76,
        term_ru: "Эволюционные вычисления",
        translation_vi: "Tính toán Tiến hóa",
        translation_en: "Evolutionary Computation",
        explanation_ru: "Направление в ИИ, которое использует идеи из эволюционной биологии, такие как наследование, мутация и отбор, для решения задач оптимизации.",
        explanation_vi: "Một nhánh của AI sử dụng các ý tưởng từ sinh học tiến hóa, chẳng hạn như di truyền, đột biến và chọn lọc, để giải quyết các bài toán tối ưu hóa.",
        explanation_en: "A field of AI that uses ideas from evolutionary biology, such as inheritance, mutation, and selection, to solve optimization problems."
    },
    {
        id: 77,
        term_ru: "Процесс естественного отбора в ГА",
        translation_vi: "Quá trình chọn lọc tự nhiên trong GA",
        translation_en: "Natural selection process in GA",
        explanation_ru: "Механизм, при котором более «приспособленные» (лучшие) решения с большей вероятностью выживают и производят «потомство», передавая свои характеристики следующему поколению.",
        explanation_vi: "Một cơ chế trong đó các giải pháp 'thích nghi' hơn (tốt hơn) có nhiều khả năng tồn tại và tạo ra 'con cháu', truyền lại các đặc điểm của chúng cho thế hệ tiếp theo.",
        explanation_en: "A mechanism where more 'fit' (better) solutions are more likely to survive and produce 'offspring', passing their characteristics to the next generation."
    },
    {
        id: 78,
        term_ru: "Пространственно-временная память данных",
        translation_vi: "Bộ nhớ không gian-thời gian của dữ liệu",
        translation_en: "Spatio-temporal memory of data",
        explanation_ru: "Характеристика данных, при которой текущее значение зависит как от предыдущих значений во времени (временная зависимость), так и от значений в соседних точках (пространственная зависимость).",
        explanation_vi: "Một đặc tính của dữ liệu trong đó giá trị hiện tại phụ thuộc cả vào các giá trị trước đó theo thời gian (phụ thuộc thời gian) và vào các giá trị tại các điểm lân cận (phụ thuộc không gian).",
        explanation_en: "A characteristic of data where the current value depends both on previous values in time (temporal dependence) and on values at neighboring points (spatial dependence)."
    },
    {
        id: 79,
        term_ru: "Кодек для сжатия",
        translation_vi: "Bộ mã hóa-giải mã (Codec)",
        translation_en: "Codec for compression",
        explanation_ru: "Устройство или программа (кодер-декодер), способная выполнять преобразование данных или сигналов для сжатия и последующего восстановления.",
        explanation_vi: "Một thiết bị hoặc chương trình (mã hóa-giải mã) có khả năng thực hiện chuyển đổi dữ liệu hoặc tín hiệu để nén và sau đó khôi phục.",
        explanation_en: "A device or program (coder-decoder) capable of performing the transformation of data or signals for compression and subsequent restoration."
    },
    {
        id: 80,
        term_ru: "Адаптивное сжатие",
        translation_vi: "Nén thích ứng",
        translation_en: "Adaptive compression",
        explanation_ru: "Метод сжатия, при котором модель (например, ST-GNN) адаптируется к изменяющимся статистическим характеристикам входных данных, повышая эффективность.",
        explanation_vi: "Một phương pháp nén trong đó mô hình (ví dụ: ST-GNN) thích ứng với các đặc tính thống kê thay đổi của dữ liệu đầu vào, giúp tăng hiệu quả.",
        explanation_en: "A compression method where the model (e.g., ST-GNN) adapts to the changing statistical characteristics of the input data, improving efficiency."
    },
    {
        id: 81,
        term_ru: "Кодирование и декодирование",
        translation_vi: "Mã hóa và Giải mã",
        translation_en: "Encoding and Decoding",
        explanation_ru: "Кодирование — процесс преобразования данных в сжатый формат. Декодирование — обратный процесс восстановления исходных данных из сжатого формата.",
        explanation_vi: "Mã hóa là quá trình chuyển đổi dữ liệu sang định dạng nén. Giải mã là quá trình ngược lại để khôi phục dữ liệu gốc từ định dạng nén.",
        explanation_en: "Encoding is the process of converting data into a compressed format. Decoding is the reverse process of restoring the original data from the compressed format."
    },
    {
        id: 82,
        term_ru: "Графовая структура данных трафика",
        translation_vi: "Cấu trúc đồ thị của dữ liệu lưu lượng",
        translation_en: "Graph structure of traffic data",
        explanation_ru: "Представление сетевого трафика в виде графа, где узлы — это сенсоры или устройства, а рёбра — связи и объемы трафика между ними.",
        explanation_vi: "Biểu diễn lưu lượng mạng dưới dạng một đồ thị, trong đó các nút là các cảm biến hoặc thiết bị, và các cạnh là các liên kết và khối lượng lưu lượng giữa chúng.",
        explanation_en: "A representation of network traffic as a graph, where nodes are sensors or devices, and edges represent the links and traffic volumes between them."
    },
    {
        id: 83,
        term_ru: "Многослойный перцептрон (MLP)",
        translation_vi: "Perceptron đa lớp (MLP)",
        translation_en: "Multi-Layer Perceptron (MLP)",
        explanation_ru: "Класс нейронных сетей прямого распространения. В работе используется для извлечения признаков и классификации типов трафика.",
        explanation_vi: "Một lớp các mạng nơ-ron truyền thẳng. Trong công trình, nó được sử dụng để trích xuất đặc trưng và phân loại các loại lưu lượng.",
        explanation_en: "A class of feedforward neural networks. In the work, it is used for feature extraction and traffic type classification."
    },
    {
        id: 84,
        term_ru: "Рекуррентная нейронная сеть (RNN)",
        translation_vi: "Mạng nơ-ron hồi quy (RNN)",
        translation_en: "Recurrent Neural Network (RNN)",
        explanation_ru: "Тип нейронной сети, хорошо подходящий для обработки последовательных данных, таких как временные ряды. Используется в ST-GNN для учета временных зависимостей.",
        explanation_vi: "Một loại mạng nơ-ron rất phù hợp để xử lý dữ liệu tuần tự, chẳng hạn như chuỗi thời gian. Được sử dụng trong ST-GNN để nắm bắt các phụ thuộc thời gian.",
        explanation_en: "A type of neural network well-suited for processing sequential data, such as time series. Used in ST-GNN to capture temporal dependencies."
    },
    {
        id: 85,
        term_ru: "Агрегация информации от соседей",
        translation_vi: "Tổng hợp thông tin từ các hàng xóm",
        translation_en: "Aggregating information from neighbors",
        explanation_ru: "Ключевой шаг в GNN, где каждый узел собирает информацию от своих соседних узлов для обновления своего состояния, улавливая пространственные зависимости.",
        explanation_vi: "Một bước quan trọng trong GNN, nơi mỗi nút thu thập thông tin từ các nút lân cận để cập nhật trạng thái của mình, nắm bắt các phụ thuộc không gian.",
        explanation_en: "A key step in GNNs where each node collects information from its neighboring nodes to update its state, capturing spatial dependencies."
    },
    {
        id: 86,
        term_ru: "Временные ряды сетевого трафика",
        translation_vi: "Chuỗi thời gian của lưu lượng mạng",
        translation_en: "Time series of network traffic",
        explanation_ru: "Последовательность измерений объема трафика, взятых через равные промежутки времени. Является входными данными для моделей прогнозирования.",
        explanation_vi: "Một chuỗi các phép đo khối lượng lưu lượng được thực hiện tại các khoảng thời gian bằng nhau. Là dữ liệu đầu vào cho các mô hình dự báo.",
        explanation_en: "A sequence of traffic volume measurements taken at equal time intervals. It serves as the input data for forecasting models."
    },
    {
        id: 87,
        term_ru: "Компромисс: вычисления vs. передача",
        translation_vi: "Sự đánh đổi: tính toán vs. truyền dẫn",
        translation_en: "Trade-off: computation vs. transmission",
        explanation_ru: "Метод ST-GNN тратит больше времени на вычисления (кодирование), но значительно сокращает время передачи данных, что выгодно при медленных каналах.",
        explanation_vi: "Phương pháp ST-GNN tốn nhiều thời gian hơn cho việc tính toán (mã hóa), nhưng giảm đáng kể thời gian truyền dữ liệu, điều này có lợi cho các kênh chậm.",
        explanation_en: "The ST-GNN method spends more time on computation (encoding) but significantly reduces data transmission time, which is advantageous over slow channels."
    },
    {
        id: 88,
        term_ru: "Синергия GNN и эволюционных алгоритмов",
        translation_vi: "Sự cộng hưởng của GNN và thuật toán tiến hóa",
        translation_en: "Synergy of GNN and evolutionary algorithms",
        explanation_ru: "GNN используется как предобработчик для классификации трафика, что сужает пространство поиска и позволяет эволюционным алгоритмам находить лучшие решения быстрее.",
        explanation_vi: "GNN được sử dụng như một bộ tiền xử lý để phân loại lưu lượng, giúp thu hẹp không gian tìm kiếm và cho phép các thuật toán tiến hóa tìm ra các giải pháp tốt hơn nhanh hơn.",
        explanation_en: "GNN is used as a preprocessor to classify traffic, which narrows the search space and allows evolutionary algorithms to find better solutions faster."
    },
    {
        id: 89,
        term_ru: "Концептуальная модель (GNN + ЭО + ТМО)",
        translation_vi: "Mô hình khái niệm (GNN + EA + QT)",
        translation_en: "Conceptual Model (GNN + EA + QT)",
        explanation_ru: "Формальная связь между методами GNN, многокритериальной эволюционной оптимизацией (ЭО) и теорией массового обслуживания (ТМО) для решения задачи минимизации задержки.",
        explanation_vi: "Mối liên hệ chính thức giữa các phương pháp GNN, tối ưu hóa tiến hóa đa mục tiêu (EA) và lý thuyết hàng đợi (QT) để giải quyết bài toán giảm thiểu độ trễ.",
        explanation_en: "A formal connection between GNN methods, multi-objective evolutionary optimization (EA), and queuing theory (QT) to solve the latency minimization problem."
    },
    {
        id: 90,
        term_ru: "Управление очередью",
        translation_vi: "Quản lý hàng đợi",
        translation_en: "Queue management",
        explanation_ru: "Процесс управления порядком и приоритетом пакетов в буфере для достижения целей QoS, таких как низкая задержка и минимизация потерь.",
        explanation_vi: "Quá trình quản lý thứ tự và độ ưu tiên của các gói tin trong bộ đệm để đạt được các mục tiêu QoS, chẳng hạn như độ trễ thấp và giảm thiểu mất mát.",
        explanation_en: "The process of managing the order and priority of packets in a buffer to achieve QoS goals like low latency and loss minimization."
    },
    {
        id: 91,
        term_ru: "Ограниченный буфер M/M/1/K",
        translation_vi: "Bộ đệm hữu hạn M/M/1/K",
        translation_en: "Finite buffer M/M/1/K",
        explanation_ru: "Модель системы массового обслуживания, где 'K' обозначает максимальную ёмкость системы (размер буфера + сервер). Пакеты, приходящие в полную систему, теряются.",
        explanation_vi: "Một mô hình hệ thống hàng đợi trong đó 'K' biểu thị dung lượng tối đa của hệ thống (kích thước bộ đệm + máy chủ). Các gói tin đến khi hệ thống đã đầy sẽ bị mất.",
        explanation_en: "A queuing system model where 'K' denotes the maximum system capacity (buffer size + server). Packets arriving when the system is full are lost."
    },
    {
        id: 92,
        term_ru: "Разработка алгоритмических решений",
        translation_vi: "Phát triển các giải pháp thuật toán",
        translation_en: "Development of algorithmic solutions",
        explanation_ru: "Одна из задач исследования: создание новых алгоритмов на основе методов ИИ для решения поставленных проблем (прогнозирование, оптимизация, сжатие).",
        explanation_vi: "Một trong những nhiệm vụ nghiên cứu: tạo ra các thuật toán mới dựa trên các phương pháp AI để giải quyết các vấn đề đã đặt ra (dự báo, tối ưu hóa, nén).",
        explanation_en: "One of the research tasks: creating new algorithms based on AI methods to solve the stated problems (forecasting, optimization, compression)."
    },
    {
        id: 93,
        term_ru: "Разрешение научного противоречия",
        translation_vi: "Giải quyết mâu thuẫn khoa học",
        translation_en: "Resolving a scientific contradiction",
        explanation_ru: "Суть научной задачи: разрешить противоречие между требованием низкой задержки и неэффективностью существующих методов в динамичных сетях.",
        explanation_vi: "Bản chất của bài toán khoa học: giải quyết mâu thuẫn giữa yêu cầu về độ trễ thấp và sự kém hiệu quả của các phương pháp hiện có trong các mạng động.",
        explanation_en: "The essence of the scientific problem: to resolve the contradiction between the requirement for low latency and the ineffectiveness of existing methods in dynamic networks."
    },
    {
        id: 94,
        term_ru: "Стохастичность спутниковых каналов",
        translation_vi: "Tính ngẫu nhiên của các kênh vệ tinh",
        translation_en: "Stochasticity of satellite channels",
        explanation_ru: "Характеристика спутниковых каналов, означающая, что их параметры (задержка, пропускная способность) меняются случайным и непредсказуемым образом.",
        explanation_vi: "Một đặc tính của các kênh vệ tinh có nghĩa là các thông số của chúng (độ trễ, băng thông) thay đổi một cách ngẫu nhiên và không thể đoán trước.",
        explanation_en: "A characteristic of satellite channels meaning their parameters (delay, bandwidth) change randomly and unpredictably."
    },
    {
      id: 95,
      term_ru: "Что такое RTT (Round-Trip Time)?",
      translation_vi: "RTT (Round-Trip Time) là gì?",
      translation_en: "What is RTT (Round-Trip Time)?",
      explanation_ru: "Это время, необходимое для отправки сигнала и получения ответа на него. В спутниковых GEO-сетях RTT очень высок (сотни миллисекунд).",
      explanation_vi: "Đây là thời gian cần thiết để gửi một tín hiệu và nhận được phản hồi. Trong các mạng vệ tinh GEO, RTT rất cao (hàng trăm mili giây).",
      explanation_en: "This is the time it takes to send a signal and receive a response to it. In GEO satellite networks, RTT is very high (hundreds of milliseconds)."
    },
    {
      id: 96,
      term_ru: "Коэффициент потерь",
      translation_vi: "Tỷ lệ mất mát",
      translation_en: "Loss Rate",
      explanation_ru: "Процент пакетов, которые были потеряны во время передачи из-за переполнения буфера или ошибок в канале. Является важным показателем QoS.",
      explanation_vi: "Tỷ lệ phần trăm các gói tin bị mất trong quá trình truyền do tràn bộ đệm hoặc lỗi kênh. Là một chỉ số QoS quan trọng.",
      explanation_en: "The percentage of packets that were lost during transmission due to buffer overflow or channel errors. It is an important QoS metric."
    },
    {
      id: 97,
      term_ru: "Что такое QoS (Quality of Service)?",
      translation_vi: "QoS (Chất lượng dịch vụ) là gì?",
      translation_en: "What is QoS (Quality of Service)?",
      explanation_ru: "Набор технологий для управления сетевым трафиком с целью обеспечения определенного уровня производительности для различных приложений, измеряемого параметрами, как задержка, джиттер и потери.",
      explanation_vi: "Một tập hợp các công nghệ để quản lý lưu lượng mạng nhằm đảm bảo một mức hiệu suất nhất định cho các ứng dụng khác nhau, được đo bằng các thông số như độ trễ, jitter và tỷ lệ mất mát.",
      explanation_en: "A set of technologies for managing network traffic to ensure a certain level of performance for various applications, measured by parameters like latency, jitter, and loss rate."
    },
    {
      id: 98,
      term_ru: "Что такое дообучение (fine-tuning)?",
      translation_vi: "Tinh chỉnh (fine-tuning) là gì?",
      translation_en: "What is fine-tuning?",
      explanation_ru: "Процесс дополнительного обучения предварительно обученной модели на новом, обычно меньшем, наборе данных для адаптации её к конкретной задаче.",
      explanation_vi: "Quá trình huấn luyện bổ sung một mô hình đã được tiền huấn luyện trên một tập dữ liệu mới, thường nhỏ hơn, để điều chỉnh nó cho một nhiệm vụ cụ thể.",
      explanation_en: "The process of additionally training a pre-trained model on a new, usually smaller, dataset to adapt it to a specific task."
    },
    {
      id: 99,
      term_ru: "Зачем нужна приоритизация трафика?",
      translation_vi: "Tại sao cần ưu tiên hóa lưu lượng?",
      translation_en: "Why is traffic prioritization needed?",
      explanation_ru: "Чтобы обеспечить разное качество обслуживания для разных типов трафика. Например, трафик видеоконференций более чувствителен к задержке, чем передача файлов, и должен иметь более высокий приоритет.",
      explanation_vi: "Để cung cấp chất lượng dịch vụ khác nhau cho các loại lưu lượng khác nhau. Ví dụ, lưu lượng hội nghị truyền hình nhạy cảm với độ trễ hơn so với việc truyền tệp và nên có độ ưu tiên cao hơn.",
      explanation_en: "To provide different quality of service for different types of traffic. For example, video conferencing traffic is more sensitive to delay than file transfers and should have a higher priority."
    },
    {
      id: 100,
      term_ru: "Что такое OFDM (Orthogonal Frequency-Division Multiplexing)?",
      translation_vi: "OFDM (Ghép kênh phân chia theo tần số trực giao) là gì?",
      translation_en: "What is OFDM (Orthogonal Frequency-Division Multiplexing)?",
      explanation_ru: "Метод цифровой модуляции, используемый во многих современных беспроводных системах связи (например, Wi-Fi, 4G/5G) для эффективной передачи данных по каналу.",
      explanation_vi: "Một phương pháp điều chế kỹ thuật số được sử dụng trong nhiều hệ thống truyền thông không dây hiện đại (ví dụ: Wi-Fi, 4G/5G) để truyền dữ liệu qua kênh một cách hiệu quả.",
      explanation_en: "A digital modulation method used in many modern wireless communication systems (e.g., Wi-Fi, 4G/5G) for efficient data transmission over a channel."
    }
];

export const flashcards: Flashcard[] = [...coreFlashcards, ...additionalFlashcards];
