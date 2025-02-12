const translation = {
  list: {
    title: 'Dokumente',
    desc: 'Alle Dateien des Wissens werden hier angezeigt, und das gesamte Wissen kann mit Dify-Zitaten verknüpft oder über das Chat-Plugin indiziert werden.',
    addFile: 'Datei hinzufügen',
    addPages: 'Seiten hinzufügen',
    table: {
      header: {
        fileName: 'DATEINAME',
        words: 'WÖRTER',
        hitCount: 'SUCHANFRAGEN',
        uploadTime: 'HOCHLADEZEIT',
        status: 'STATUS',
        action: 'AKTION',
        chunkingMode: 'CHUNKING-MODUS',
      },
      name: 'Name',
      rename: 'Umbenennen',
    },
    action: {
      uploadFile: 'Neue Datei hochladen',
      settings: 'Segment-Einstellungen',
      addButton: 'Chunk hinzufügen',
      add: 'Einen Chunk hinzufügen',
      batchAdd: 'Batch hinzufügen',
      archive: 'Archivieren',
      unarchive: 'Archivierung aufheben',
      delete: 'Löschen',
      enableWarning: 'Archivierte Datei kann nicht aktiviert werden',
      sync: 'Synchronisieren',
    },
    index: {
      enable: 'Aktivieren',
      disable: 'Deaktivieren',
      all: 'Alle',
      enableTip: 'Die Datei kann indiziert werden',
      disableTip: 'Die Datei kann nicht indiziert werden',
    },
    status: {
      queuing: 'In Warteschlange',
      indexing: 'Indizierung',
      paused: 'Pausiert',
      error: 'Fehler',
      available: 'Verfügbar',
      enabled: 'Aktiviert',
      disabled: 'Deaktiviert',
      archived: 'Archiviert',
    },
    empty: {
      title: 'Es gibt noch keine Dokumentation',
      upload: {
        tip: 'Sie können Dateien hochladen, von der Website oder von Web-Apps wie Notion, GitHub usw. synchronisieren.',
      },
      sync: {
        tip: 'Dify wird periodisch Dateien von Ihrem Notion herunterladen und die Verarbeitung abschließen.',
      },
    },
    delete: {
      title: 'Sind Sie sicher, dass Sie löschen möchten?',
      content: 'Wenn Sie die Verarbeitung später fortsetzen müssen, werden Sie dort weitermachen, wo Sie aufgehört haben',
    },
    batchModal: {
      title: 'Chunks in Batch hinzufügen',
      csvUploadTitle: 'Ziehen Sie Ihre CSV-Datei hierher oder ',
      browse: 'durchsuchen',
      tip: 'Die CSV-Datei muss der folgenden Struktur entsprechen:',
      question: 'Frage',
      answer: 'Antwort',
      contentTitle: 'Chunk-Inhalt',
      content: 'Inhalt',
      template: 'Laden Sie die Vorlage hier herunter',
      cancel: 'Abbrechen',
      run: 'Batch ausführen',
      runError: 'Batch-Ausführung fehlgeschlagen',
      processing: 'In Batch-Verarbeitung',
      completed: 'Import abgeschlossen',
      error: 'Importfehler',
      ok: 'OK',
    },
    addUrl: 'URL hinzufügen',
    learnMore: 'Weitere Informationen',
  },
  metadata: {
    title: 'Metadaten',
    desc: 'Das Kennzeichnen von Metadaten für Dokumente ermöglicht es der KI, sie rechtzeitig zu erreichen und die Quelle der Referenzen für die Benutzer offenzulegen.',
    dateTimeFormat: 'MMMM D, YYYY hh:mm A',
    docTypeSelectTitle: 'Bitte wählen Sie einen Dokumenttyp',
    docTypeChangeTitle: 'Dokumenttyp ändern',
    docTypeSelectWarning:
      'Wenn der Dokumenttyp geändert wird, werden die jetzt ausgefüllten Metadaten nicht mehr erhalten bleiben',
    firstMetaAction: 'Los geht\'s',
    placeholder: {
      add: 'Hinzufügen ',
      select: 'Auswählen ',
    },
    source: {
      upload_file: 'Datei hochladen',
      notion: 'Von Notion synchronisieren',
      github: 'Von Github synchronisieren',
    },
    type: {
      book: 'Buch',
      webPage: 'Webseite',
      paper: 'Aufsatz',
      socialMediaPost: 'Social Media Beitrag',
      personalDocument: 'Persönliches Dokument',
      businessDocument: 'Geschäftsdokument',
      IMChat: 'IM Chat',
      wikipediaEntry: 'Wikipedia-Eintrag',
      notion: 'Von Notion synchronisieren',
      github: 'Von Github synchronisieren',
      technicalParameters: 'Technische Parameter',
    },
    field: {
      processRule: {
        processDoc: 'Dokument verarbeiten',
        segmentRule: 'Chunk-Regel',
        segmentLength: 'Chunk-Länge',
        processClean: 'Textverarbeitung bereinigen',
      },
      book: {
        title: 'Titel',
        language: 'Sprache',
        author: 'Autor',
        publisher: 'Verlag',
        publicationDate: 'Veröffentlichungsdatum',
        ISBN: 'ISBN',
        category: 'Kategorie',
      },
      webPage: {
        title: 'Titel',
        url: 'URL',
        language: 'Sprache',
        authorPublisher: 'Autor/Verlag',
        publishDate: 'Veröffentlichungsdatum',
        topicKeywords: 'Themen/Schlüsselwörter',
        description: 'Beschreibung',
      },
      paper: {
        title: 'Titel',
        language: 'Sprache',
        author: 'Autor',
        publishDate: 'Veröffentlichungsdatum',
        journalConferenceName: 'Zeitschrift/Konferenzname',
        volumeIssuePage: 'Band/Ausgabe/Seite',
        DOI: 'DOI',
        topicKeywords: 'Themen/Schlüsselwörter',
        abstract: 'Zusammenfassung',
      },
      socialMediaPost: {
        platform: 'Plattform',
        authorUsername: 'Autor/Benutzername',
        publishDate: 'Veröffentlichungsdatum',
        postURL: 'Beitrags-URL',
        topicsTags: 'Themen/Tags',
      },
      personalDocument: {
        title: 'Titel',
        author: 'Autor',
        creationDate: 'Erstellungsdatum',
        lastModifiedDate: 'Letztes Änderungsdatum',
        documentType: 'Dokumenttyp',
        tagsCategory: 'Tags/Kategorie',
      },
      businessDocument: {
        title: 'Titel',
        author: 'Autor',
        creationDate: 'Erstellungsdatum',
        lastModifiedDate: 'Letztes Änderungsdatum',
        documentType: 'Dokumenttyp',
        departmentTeam: 'Abteilung/Team',
      },
      IMChat: {
        chatPlatform: 'Chat-Plattform',
        chatPartiesGroupName: 'Chat-Parteien/Gruppenname',
        participants: 'Teilnehmer',
        startDate: 'Startdatum',
        endDate: 'Enddatum',
        topicsKeywords: 'Themen/Schlüsselwörter',
        fileType: 'Dateityp',
      },
      wikipediaEntry: {
        title: 'Titel',
        language: 'Sprache',
        webpageURL: 'Webseiten-URL',
        editorContributor: 'Editor/Beitragender',
        lastEditDate: 'Letztes Bearbeitungsdatum',
        summaryIntroduction: 'Zusammenfassung/Einführung',
      },
      notion: {
        title: 'Titel',
        language: 'Sprache',
        author: 'Autor',
        createdTime: 'Erstellungszeit',
        lastModifiedTime: 'Letzte Änderungszeit',
        url: 'URL',
        tag: 'Tag',
        description: 'Beschreibung',
      },
      github: {
        repoName: 'Repository-Name',
        repoDesc: 'Repository-Beschreibung',
        repoOwner: 'Repository-Eigentümer',
        fileName: 'Dateiname',
        filePath: 'Dateipfad',
        programmingLang: 'Programmiersprache',
        url: 'URL',
        license: 'Lizenz',
        lastCommitTime: 'Letzte Commit-Zeit',
        lastCommitAuthor: 'Letzter Commit-Autor',
      },
      originInfo: {
        originalFilename: 'Originaldateiname',
        originalFileSize: 'Originaldateigröße',
        uploadDate: 'Hochladedatum',
        lastUpdateDate: 'Letztes Änderungsdatum',
        source: 'Quelle',
      },
      technicalParameters: {
        segmentSpecification: 'Chunk-Spezifikation',
        segmentLength: 'Chunk-Länge',
        avgParagraphLength: 'Durchschn. Absatzlänge',
        paragraphs: 'Absätze',
        hitCount: 'Abrufanzahl',
        embeddingTime: 'Einbettungszeit',
        embeddedSpend: 'Einbettungsausgaben',
      },
    },
    languageMap: {
      zh: 'Chinesisch',
      en: 'Englisch',
      es: 'Spanisch',
      fr: 'Französisch',
      de: 'Deutsch',
      ja: 'Japanisch',
      ko: 'Koreanisch',
      ru: 'Russisch',
      ar: 'Arabisch',
      pt: 'Portugiesisch',
      it: 'Italienisch',
      nl: 'Niederländisch',
      pl: 'Polnisch',
      sv: 'Schwedisch',
      tr: 'Türkisch',
      he: 'Hebräisch',
      hi: 'Hindi',
      da: 'Dänisch',
      fi: 'Finnisch',
      no: 'Norwegisch',
      hu: 'Ungarisch',
      el: 'Griechisch',
      cs: 'Tschechisch',
      th: 'Thai',
      id: 'Indonesisch',
    },
    categoryMap: {
      book: {
        fiction: 'Fiktion',
        biography: 'Biografie',
        history: 'Geschichte',
        science: 'Wissenschaft',
        technology: 'Technologie',
        education: 'Bildung',
        philosophy: 'Philosophie',
        religion: 'Religion',
        socialSciences: 'Sozialwissenschaften',
        art: 'Kunst',
        travel: 'Reisen',
        health: 'Gesundheit',
        selfHelp: 'Selbsthilfe',
        businessEconomics: 'Wirtschaft',
        cooking: 'Kochen',
        childrenYoungAdults: 'Kinder & Jugendliche',
        comicsGraphicNovels: 'Comics & Grafische Romane',
        poetry: 'Poesie',
        drama: 'Drama',
        other: 'Andere',
      },
      personalDoc: {
        notes: 'Notizen',
        blogDraft: 'Blog-Entwurf',
        diary: 'Tagebuch',
        researchReport: 'Forschungsbericht',
        bookExcerpt: 'Buchauszug',
        schedule: 'Zeitplan',
        list: 'Liste',
        projectOverview: 'Projektübersicht',
        photoCollection: 'Fotosammlung',
        creativeWriting: 'Kreatives Schreiben',
        codeSnippet: 'Code-Snippet',
        designDraft: 'Design-Entwurf',
        personalResume: 'Persönlicher Lebenslauf',
        other: 'Andere',
      },
      businessDoc: {
        meetingMinutes: 'Protokolle',
        researchReport: 'Forschungsbericht',
        proposal: 'Vorschlag',
        employeeHandbook: 'Mitarbeiterhandbuch',
        trainingMaterials: 'Schulungsmaterialien',
        requirementsDocument: 'Anforderungsdokumentation',
        designDocument: 'Design-Dokument',
        productSpecification: 'Produktspezifikation',
        financialReport: 'Finanzbericht',
        marketAnalysis: 'Marktanalyse',
        projectPlan: 'Projektplan',
        teamStructure: 'Teamstruktur',
        policiesProcedures: 'Richtlinien & Verfahren',
        contractsAgreements: 'Verträge & Vereinbarungen',
        emailCorrespondence: 'E-Mail-Korrespondenz',
        other: 'Andere',
      },
    },
  },
  embedding: {
    processing: 'Einbettungsverarbeitung...',
    paused: 'Einbettung pausiert',
    completed: 'Einbettung abgeschlossen',
    error: 'Einbettungsfehler',
    docName: 'Dokument vorbereiten',
    mode: 'Segmentierungsregel',
    segmentLength: 'Chunk-Länge',
    textCleaning: 'Textvordefinition und -bereinigung',
    segments: 'Absätze',
    highQuality: 'Hochwertiger Modus',
    economy: 'Wirtschaftlicher Modus',
    estimate: 'Geschätzter Verbrauch',
    stop: 'Verarbeitung stoppen',
    resume: 'Verarbeitung fortsetzen',
    automatic: 'Automatisch',
    custom: 'Benutzerdefiniert',
    previewTip: 'Absatzvorschau ist nach Abschluss der Einbettung verfügbar',
    parentMaxTokens: 'Elternteil',
    childMaxTokens: 'Kind',
    hierarchical: 'Eltern-Kind',
    pause: 'Pause',
  },
  segment: {
    paragraphs: 'Absätze',
    keywords: 'Schlüsselwörter',
    addKeyWord: 'Schlüsselwort hinzufügen',
    keywordError: 'Die maximale Länge des Schlüsselworts beträgt 20',
    characters: 'Zeichen',
    hitCount: 'Abrufanzahl',
    vectorHash: 'Vektor-Hash: ',
    questionPlaceholder: 'Frage hier hinzufügen',
    questionEmpty: 'Frage darf nicht leer sein',
    answerPlaceholder: 'Antwort hier hinzufügen',
    answerEmpty: 'Antwort darf nicht leer sein',
    contentPlaceholder: 'Inhalt hier hinzufügen',
    contentEmpty: 'Inhalt darf nicht leer sein',
    newTextSegment: 'Neues Textsegment',
    newQaSegment: 'Neues Q&A-Segment',
    delete: 'Diesen Chunk löschen?',
    parentChunks_one: 'ÜBERGEORDNETER CHUNK',
    searchResults_other: 'BEFUND',
    clearFilter: 'Filter löschen',
    chunk: 'Stück',
    childChunk: 'Untergeordneter Brocken',
    newChildChunk: 'Neuer untergeordneter Block',
    chunkDetail: 'Chunk-Detail',
    regeneratingMessage: 'Das kann einen Moment dauern, bitte warten...',
    searchResults_zero: 'ERGEBNIS',
    parentChunks_other: 'ÜBERGEORDNETE BLÖCKE',
    editParentChunk: 'Übergeordneter Block bearbeiten',
    childChunks_other: 'UNTERGEORDNETE BLÖCKE',
    editChunk: 'Chunk bearbeiten',
    regenerationSuccessTitle: 'Regeneration abgeschlossen',
    parentChunk: 'Übergeordneter Chunk',
    childChunkAdded: '1 untergeordneter Block hinzugefügt',
    edited: 'BEARBEITETE',
    collapseChunks: 'Blöcke reduzieren',
    empty: 'Kein Chunk gefunden',
    regenerationSuccessMessage: 'Sie können dieses Fenster schließen.',
    chunks_other: 'STÜCKE',
    regenerationConfirmMessage: 'Beim Regenerieren von untergeordneten Blöcken werden die aktuellen untergeordneten Blöcke überschrieben, einschließlich bearbeiteter und neu hinzugefügter Blöcke. Die Regeneration kann nicht rückgängig gemacht werden.',
    childChunks_one: 'UNTERGEORDNETER CHUNK',
    characters_other: 'Zeichen',
    newChunk: 'Neuer Brocken',
    editChildChunk: 'Untergeordneten Block bearbeiten',
    chunkAdded: '1 Stück hinzugefügt',
    expandChunks: 'Blöcke erweitern',
    editedAt: 'Bearbeitet am',
    addChunk: 'Block hinzufügen',
    addAnother: 'Fügen Sie eine weitere hinzu',
    regeneratingTitle: 'Regenerieren von untergeordneten Blöcken',
    chunks_one: 'STÜCK',
    characters_one: 'Zeichen',
    addChildChunk: 'Untergeordneten Block hinzufügen',
    regenerationConfirmTitle: 'Möchten Sie untergeordnete Chunks regenerieren?',
    searchResults_one: 'ERGEBNIS',
  },
}

export default translation
