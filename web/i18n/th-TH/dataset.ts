const translation = {
  knowledge: 'ความรู้',
  externalTag: 'ภายนอก',
  externalAPI: 'API ภายนอก',
  externalAPIPanelTitle: 'API ความรู้ภายนอก',
  externalKnowledgeId: 'ID ความรู้ภายนอก',
  externalKnowledgeName: 'ชื่อความรู้ภายนอก',
  externalKnowledgeDescription: 'คําอธิบายความรู้',
  externalKnowledgeIdPlaceholder: 'โปรดป้อน Knowledge ID',
  externalKnowledgeNamePlaceholder: 'โปรดป้อนชื่อฐานความรู้',
  externalKnowledgeDescriptionPlaceholder: 'อธิบายสิ่งที่อยู่ในฐานความรู้นี้ (ไม่บังคับ)',
  learnHowToWriteGoodKnowledgeDescription: 'เรียนรู้วิธีการเขียนคําอธิบายความรู้ที่ดี',
  externalAPIPanelDescription: 'API ความรู้ภายนอกใช้เพื่อเชื่อมต่อกับฐานความรู้ภายนอก Dify และดึงความรู้จากฐานความรู้นั้น',
  externalAPIPanelDocumentation: 'เรียนรู้วิธีสร้าง API ความรู้ภายนอก',
  documentCount: 'เอกสาร',
  wordCount: 'คํา k',
  appCount: 'แอปที่เชื่อมโยง',
  createDataset: 'สร้างความรู้',
  createNewExternalAPI: 'สร้าง API ความรู้ภายนอกใหม่',
  noExternalKnowledge: 'ยังไม่มี External Knowledge API คลิกที่นี่เพื่อสร้าง',
  createExternalAPI: 'เพิ่ม API ความรู้ภายนอก',
  editExternalAPIFormTitle: 'แก้ไข API ความรู้ภายนอก',
  editExternalAPITooltipTitle: 'ความรู้ที่เชื่อมโยง',
  editExternalAPIConfirmWarningContent: {
    front: 'API ความรู้ภายนอกนี้เชื่อมโยงกับ',
    end: 'ความรู้ภายนอกและการปรับเปลี่ยนนี้จะนําไปใช้กับพวกเขาทั้งหมด คุณแน่ใจหรือไม่ว่าต้องการบันทึกการเปลี่ยนแปลงนี้?',
  },
  editExternalAPIFormWarning: {
    front: 'API ภายนอกนี้เชื่อมโยงกับ',
    end: 'ความรู้ภายนอก',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: 'ลบ',
      end: '?',
    },
    content: {
      front: 'API ความรู้ภายนอกนี้เชื่อมโยงกับ',
      end: 'ความรู้ภายนอก การลบ API นี้จะทําให้ API ทั้งหมดเป็นโมฆะ คุณแน่ใจหรือไม่ว่าต้องการลบ API นี้?',
    },
    noConnectionContent: 'คุณแน่ใจว่าจะลบ API นี้หรือไม่',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'เลือก API ความรู้ภายนอก',
  },
  connectDataset: 'เชื่อมต่อกับฐานความรู้ภายนอก',
  connectDatasetIntro: {
    title: 'วิธีการเชื่อมต่อกับฐานความรู้ภายนอก',
    content: {
      front: 'เมื่อต้องการเชื่อมต่อกับฐานความรู้ภายนอก คุณต้องสร้าง API ภายนอกก่อน โปรดอ่านอย่างละเอียดและอ้างอิง',
      link: 'ดูวิธีสร้าง API ภายนอก',
      end: '. จากนั้นค้นหา Knowledge ID ที่เกี่ยวข้องและกรอกข้อมูลในแบบฟอร์มทางด้านซ้าย หากข้อมูลทั้งหมดถูกต้อง ข้อมูลจะข้ามไปยังการทดสอบการดึงข้อมูลในฐานความรู้โดยอัตโนมัติหลังจากคลิกปุ่มเชื่อมต่อ',
    },
    learnMore: 'ศึกษาเพิ่มเติม',
  },
  connectHelper: {
    helper1: 'เชื่อมต่อกับฐานความรู้ภายนอกผ่าน API และ ID ฐานความรู้ ปัจจุบัน',
    helper2: 'รองรับเฉพาะฟังก์ชันการดึงข้อมูล',
    helper3: '. เราขอแนะนําให้คุณ',
    helper4: 'อ่านเอกสารวิธีใช้',
    helper5: 'ระมัดระวังก่อนใช้คุณสมบัตินี้',
  },
  createDatasetIntro: 'นําเข้าข้อมูลข้อความของคุณเองหรือเขียนข้อมูลแบบเรียลไทม์ผ่าน Webhook เพื่อปรับปรุงบริบท LLM',
  deleteDatasetConfirmTitle: 'ลบความรู้นี้?',
  deleteDatasetConfirmContent: 'การลบความรู้นั้นไม่สามารถย้อนกลับได้ ผู้ใช้จะไม่สามารถเข้าถึงความรู้ของคุณอีกต่อไป และการกําหนดค่าพร้อมท์และบันทึกทั้งหมดจะถูกลบอย่างถาวร',
  datasetUsedByApp: 'ความรู้นี้ถูกใช้โดยบางแอป แอปจะไม่สามารถใช้ความรู้นี้ได้อีกต่อไป และการกําหนดค่าพร้อมท์และบันทึกทั้งหมดจะถูกลบอย่างถาวร',
  datasetDeleted: 'ลบความรู้',
  datasetDeleteFailed: 'ลบความรู้ไม่สําเร็จ',
  didYouKnow: 'คุณรู้หรือไม่?',
  intro1: 'ความรู้สามารถรวมเข้ากับแอปพลิเคชัน Dify ได้',
  intro2: 'ตามบริบท',
  intro3: ',',
  intro4: 'หรือมัน',
  intro5: 'สามารถสร้างได้',
  intro6: 'เป็นปลั๊กอินดัชนี ChatGPT แบบสแตนด์อโลนเพื่อเผยแพร่',
  unavailable: 'ไม่',
  unavailableTip: 'โมเดลการฝังไม่พร้อมใช้งาน จําเป็นต้องกําหนดค่าโมเดลการฝังเริ่มต้น',
  datasets: 'ความรู้',
  datasetsApi: 'การเข้าถึง API',
  externalKnowledgeForm: {
    connect: 'ติด',
    cancel: 'ยกเลิก',
  },
  externalAPIForm: {
    name: 'ชื่อ',
    endpoint: 'ปลายทาง API',
    apiKey: 'คีย์ API',
    save: 'ประหยัด',
    cancel: 'ยกเลิก',
    edit: 'แก้ไข',
    encrypted: {
      front: 'โทเค็น API ของคุณจะถูกเข้ารหัสและจัดเก็บโดยใช้',
      end: 'เทคโนโลยี ',
    },
  },
  retrieval: {
    semantic_search: {
      title: 'การค้นหาเวกเตอร์',
      description: 'สร้างการฝังแบบสอบถามและค้นหาส่วนข้อความที่คล้ายกับการแสดงเวกเตอร์มากที่สุด',
    },
    full_text_search: {
      title: 'การค้นหาข้อความแบบเต็ม',
      description: 'จัดทําดัชนีคําศัพท์ทั้งหมดในเอกสาร เพื่อให้ผู้ใช้สามารถค้นหาคําศัพท์ใดก็ได้และดึงข้อความที่เกี่ยวข้องที่มีคําเหล่านั้น',
    },
    hybrid_search: {
      title: 'การค้นหาแบบไฮบริด',
      description: 'ดําเนินการค้นหาข้อความแบบเต็มและการค้นหาแบบเวกเตอร์พร้อมกันจัดอันดับใหม่เพื่อเลือกการจับคู่ที่ดีที่สุดสําหรับคําค้นหาของผู้ใช้ ผู้ใช้สามารถเลือกที่จะตั้งค่าน้ําหนักหรือกําหนดค่าเป็นโมเดล Rerank',
      recommend: 'แนะนำ',
    },
    invertedIndex: {
      title: 'ดัชนีกลับด้าน',
      description: 'Inverted Index เป็นโครงสร้างที่ใช้สําหรับการดึงข้อมูลอย่างมีประสิทธิภาพ จัดเรียงตามคําศัพท์ แต่ละคําชี้ไปที่เอกสารหรือหน้าเว็บที่มีคําดังกล่าว',
    },
    change: 'เปลี่ยน',
    changeRetrievalMethod: 'วิธีการเรียกดูการเปลี่ยนแปลง',
  },
  docsFailedNotice: 'เอกสารไม่สามารถจัดทําดัชนีได้',
  retry: 'ลอง',
  indexingTechnique: {
    high_quality: 'สํานักงานใหญ่',
    economy: 'อีโค',
  },
  indexingMethod: {
    semantic_search: 'เวกเตอร์',
    full_text_search: 'ข้อความฉบับเต็ม',
    hybrid_search: 'พันธุ์ผสม',
    invertedIndex: 'คว่ำ',
  },
  defaultRetrievalTip: 'การดึงข้อมูลหลายเส้นทางจะถูกใช้โดยค่าเริ่มต้น ความรู้จะถูกดึงมาจากฐานความรู้หลายแห่งแล้วจัดอันดับใหม่',
  mixtureHighQualityAndEconomicTip: 'โมเดล Rerank จําเป็นสําหรับการผสมผสานระหว่างฐานความรู้คุณภาพสูงและประหยัด',
  inconsistentEmbeddingModelTip: 'จําเป็นต้องมีแบบจําลอง Rerank หากแบบจําลองการฝังของฐานความรู้ที่เลือกไม่สอดคล้องกัน',
  mixtureInternalAndExternalTip: 'โมเดล Rerank จําเป็นสําหรับการผสมผสานระหว่างความรู้ภายในและภายนอก',
  allExternalTip: 'เมื่อใช้ความรู้ภายนอกเท่านั้น ผู้ใช้สามารถเลือกได้ว่าจะเปิดใช้งานโมเดล Rerank หรือไม่ หากไม่ได้เปิดใช้งาน ก้อนที่ดึงมาจะถูกจัดเรียงตามคะแนน เมื่อกลยุทธ์การดึงข้อมูลของฐานความรู้ที่แตกต่างกันไม่สอดคล้องกัน ก็จะไม่ถูกต้อง',
  retrievalSettings: 'การตั้งค่าการดึงข้อมูล',
  rerankSettings: 'การตั้งค่ารีไลน์',
  weightedScore: {
    title: 'คะแนนถ่วงน้ําหนัก',
    description: 'กลยุทธ์การจัดอันดับใหม่นี้จะกําหนดว่าควรจัดลําดับความสําคัญของการจับคู่ความหมายหรือคีย์เวิร์ด',
    semanticFirst: 'ความหมายก่อน',
    keywordFirst: 'คีย์เวิร์ดก่อน',
    customized: 'กำหนด เอง',
    semantic: 'ความหมาย',
    keyword: 'คำ',
  },
  nTo1RetrievalLegacy: 'การดึงข้อมูล N-to-1 จะเลิกใช้อย่างเป็นทางการตั้งแต่เดือนกันยายน ขอแนะนําให้ใช้การดึงข้อมูลหลายเส้นทางล่าสุดเพื่อให้ได้ผลลัพธ์ที่ดีขึ้น',
  nTo1RetrievalLegacyLink: 'ศึกษาเพิ่มเติม',
  nTo1RetrievalLegacyLinkText: 'การดึงข้อมูล N-to-1 จะเลิกใช้อย่างเป็นทางการในเดือนกันยายน',
  chunkingMode: {
    general: 'ทั่วไป',
    parentChild: 'พ่อแม่ลูก',
  },
  parentMode: {
    paragraph: 'วรรค',
    fullDoc: 'เอกสารฉบับเต็ม',
  },
  batchAction: {
    selected: 'เลือก',
    archive: 'หอจดหมายเหตุ',
    delete: 'ลบ',
    enable: 'เปิด',
    cancel: 'ยกเลิก',
    disable: 'เก',
  },
  localDocs: 'เอกสารท้องถิ่น',
  preprocessDocument: '{{num}} เอกสารการประมวลผลล่วงหน้า',
  documentsDisabled: '{{num}} เอกสารถูกปิดใช้งาน - ไม่ได้ใช้งานนานกว่า 30 วัน',
  enable: 'เปิด',
}

export default translation