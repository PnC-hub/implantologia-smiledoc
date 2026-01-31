export interface BlogArticle {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: string // HTML content
}

export const useBlogArticles = () => {
  const articles: BlogArticle[] = [
    {
      slug: 'impianti-dentali-monterotondo',
      title: 'Impianti dentali a Monterotondo: cosa sapere prima dell\'intervento',
      metaTitle: 'Impianti Dentali a Monterotondo | Guida Completa - Smiledoc',
      metaDescription: 'Stai valutando un impianto dentale a Monterotondo? Scopri cosa sapere prima dell\'intervento: preparazione, fasi, tempi di recupero e come scegliere lo studio giusto.',
      excerpt: 'Tutto quello che devi sapere prima di affrontare un intervento di implantologia a Monterotondo: dalla prima visita al risultato finale.',
      date: '2025-01-15',
      category: 'Implantologia',
      readTime: '7 min',
      content: `
        <p>Se vivi a <strong>Monterotondo</strong> o nei comuni limitrofi e stai valutando la possibilità di sostituire uno o più denti mancanti con degli impianti dentali, è naturale avere domande e qualche preoccupazione. In questo articolo affrontiamo tutti gli aspetti fondamentali per aiutarti a prendere una decisione informata.</p>

        <h2>Cos'è un impianto dentale?</h2>
        <p>Un impianto dentale è una piccola vite in titanio che viene inserita nell'osso mascellare o mandibolare. Questa vite funziona come una radice artificiale su cui viene poi fissata una corona (il dente visibile). Il titanio è un materiale biocompatibile: il tuo osso lo integra naturalmente in un processo chiamato <strong>osteointegrazione</strong>.</p>

        <h2>Quando è necessario un impianto?</h2>
        <p>L'implantologia è indicata quando mancano uno o più denti a causa di:</p>
        <ul>
          <li>Estrazioni per carie profonde o infezioni</li>
          <li>Traumi o incidenti</li>
          <li>Malattia parodontale avanzata</li>
          <li>Denti che non si sono mai sviluppati (agenesia)</li>
        </ul>
        <p>È importante non rimandare: lo spazio vuoto lasciato da un dente mancante provoca lo spostamento dei denti vicini, problemi al morso e un progressivo riassorbimento dell'osso.</p>

        <h2>Le fasi dell'intervento</h2>
        <h3>1. Prima visita e diagnosi</h3>
        <p>Il percorso inizia con una visita approfondita che include radiografie panoramiche e, quando necessario, una TAC 3D (Cone Beam). Questi esami permettono di valutare la quantità e la qualità dell'osso disponibile e di pianificare l'intervento con precisione millimetrica.</p>

        <h3>2. Pianificazione digitale</h3>
        <p>Presso il Centro Odontoiatrico Smiledoc a Monterotondo, utilizziamo tecnologie di pianificazione digitale che consentono di simulare l'intervento al computer prima di eseguirlo. Questo si traduce in maggiore precisione e minore invasività.</p>

        <h3>3. Inserimento dell'impianto</h3>
        <p>L'intervento viene eseguito in anestesia locale. In molti casi, grazie alla <strong>sedazione cosciente</strong> con la presenza di un anestesista, il paziente vive l'esperienza in totale serenità, senza ansia né dolore.</p>

        <h3>4. Guarigione e protesi definitiva</h3>
        <p>Dopo l'inserimento, segue un periodo di osteointegrazione (generalmente 3-6 mesi). In alcuni casi selezionati, è possibile il <strong>carico immediato</strong>: denti fissi provvisori applicati nelle 24 ore successive all'intervento.</p>

        <h2>Perché scegliere Smiledoc a Monterotondo</h2>
        <p>Il Centro Odontoiatrico Smiledoc, diretto dal Dott. Piernatale Civero, rappresenta un punto di riferimento per l'implantologia nella zona di Monterotondo e in tutto il Lazio. Con oltre 25 anni di esperienza e più di 5.000 impianti inseriti, offriamo:</p>
        <ul>
          <li>Tecnologia diagnostica all'avanguardia</li>
          <li>Sedazione cosciente per interventi sereni</li>
          <li>Possibilità di carico immediato</li>
          <li>Garanzia di 10 anni sulla protesi</li>
          <li>Team dedicato e ambiente accogliente</li>
        </ul>

        <h2>Quanto costa un impianto dentale a Monterotondo?</h2>
        <p>Il costo di un impianto dentale varia in base alla complessità del caso, al numero di impianti necessari e al tipo di protesi. Ogni situazione è diversa ed è fondamentale una valutazione personalizzata. Presso Smiledoc, dopo la prima visita diagnostica, riceverai un piano di trattamento dettagliato con tutte le informazioni necessarie per valutare il tuo percorso.</p>

        <h2>Domande frequenti</h2>
        <h3>L'intervento è doloroso?</h3>
        <p>No. L'intervento viene eseguito in anestesia locale e, presso Smiledoc, è disponibile la sedazione cosciente. La maggior parte dei pazienti riferisce di non aver avvertito alcun dolore durante l'intervento.</p>

        <h3>Quanto tempo ci vuole?</h3>
        <p>L'inserimento di un singolo impianto richiede circa 30-60 minuti. Per riabilitazioni più complesse, i tempi sono valutati caso per caso durante la visita.</p>

        <h3>Posso fare impianti se ho poco osso?</h3>
        <p>Sì. Esistono tecniche specifiche come il rialzo del seno mascellare e gli innesti ossei che permettono di posizionare impianti anche in condizioni di scarsa disponibilità ossea. Il Dott. Civero ha una vasta esperienza in questo tipo di interventi.</p>
      `,
    },
    {
      slug: 'carico-immediato-denti-fissi-24-ore',
      title: 'Implantologia a carico immediato: denti fissi in 24 ore',
      metaTitle: 'Carico Immediato: Denti Fissi in 24 Ore | Smiledoc Monterotondo',
      metaDescription: 'Denti fissi in sole 24 ore con il carico immediato. Scopri come funziona, chi può farlo e perché Smiledoc a Monterotondo è il centro di riferimento nel Lazio.',
      excerpt: 'Scopri come è possibile uscire dallo studio con denti fissi nuovi in sole 24 ore grazie alla tecnica del carico immediato.',
      date: '2025-01-10',
      category: 'Implantologia',
      readTime: '6 min',
      content: `
        <p>Immagina di entrare in uno studio dentistico con denti mancanti o una dentiera instabile, e uscirne il giorno dopo con una <strong>dentatura fissa e funzionale</strong>. Non è fantascienza: è la tecnica del <strong>carico immediato</strong>, una delle soluzioni più avanzate nell'implantologia moderna.</p>

        <h2>Cos'è il carico immediato?</h2>
        <p>Il carico immediato è una tecnica implantologica che consente di applicare una protesi fissa provvisoria sugli impianti appena inseriti, solitamente <strong>entro 24-48 ore dall'intervento</strong>. A differenza del protocollo tradizionale, che richiede mesi di attesa per l'osteointegrazione prima di applicare i denti, con il carico immediato il paziente torna subito a sorridere e masticare.</p>

        <h2>Come funziona?</h2>
        <p>Il protocollo prevede:</p>
        <ol>
          <li><strong>Visita diagnostica</strong> con TAC 3D e pianificazione digitale dell'intervento</li>
          <li><strong>Inserimento degli impianti</strong> in una singola seduta chirurgica</li>
          <li><strong>Presa dell'impronta</strong> immediatamente dopo l'intervento</li>
          <li><strong>Realizzazione della protesi</strong> provvisoria fissa nel laboratorio dello studio</li>
          <li><strong>Applicazione dei denti fissi</strong> entro 24 ore</li>
        </ol>
        <p>Dopo alcuni mesi di guarigione e osteointegrazione completa, la protesi provvisoria viene sostituita con quella definitiva.</p>

        <h2>Chi può fare il carico immediato?</h2>
        <p>Non tutti i pazienti sono candidati al carico immediato. Le condizioni necessarie includono:</p>
        <ul>
          <li>Sufficiente quantità e qualità dell'osso</li>
          <li>Buona stabilità primaria dell'impianto al momento dell'inserimento</li>
          <li>Assenza di infezioni attive nella zona dell'intervento</li>
          <li>Buone condizioni di salute generale</li>
        </ul>
        <p>La valutazione viene fatta durante la prima visita diagnostica. Il Dott. Civero, grazie alla sua esperienza, è in grado di determinare con precisione se il carico immediato è la soluzione adatta al tuo caso specifico.</p>

        <h2>Vantaggi del carico immediato</h2>
        <ul>
          <li><strong>Tempi ridotti:</strong> denti fissi in 24 ore anziché mesi di attesa</li>
          <li><strong>Un solo intervento chirurgico</strong> anziché più sedute</li>
          <li><strong>Immediato ritorno alla normalità:</strong> puoi sorridere e mangiare da subito</li>
          <li><strong>Comfort psicologico:</strong> nessun periodo con denti mancanti o protesi rimovibili temporanee</li>
          <li><strong>Minore numero di visite</strong> complessive</li>
        </ul>

        <h2>L'esperienza Smiledoc a Monterotondo</h2>
        <p>Presso il Centro Odontoiatrico Smiledoc, il Dott. Piernatale Civero esegue interventi di carico immediato da oltre 20 anni. Lo studio dispone di un laboratorio odontotecnico integrato che consente di realizzare la protesi in tempi rapidissimi, senza dover attendere consegne esterne.</p>
        <p>La combinazione di esperienza clinica, tecnologia digitale e laboratorio interno rende Smiledoc un punto di riferimento per il carico immediato a <strong>Monterotondo</strong> e in tutta la provincia di Roma Nord.</p>
      `,
    },
    {
      slug: 'paura-dentista-sedazione-cosciente',
      title: 'Paura del dentista? Come la sedazione cosciente rende l\'intervento sereno',
      metaTitle: 'Paura del Dentista? Sedazione Cosciente | Smiledoc Monterotondo',
      metaDescription: 'Hai paura del dentista? Scopri come la sedazione cosciente permette di affrontare interventi di implantologia in totale serenità. Smiledoc Monterotondo.',
      excerpt: 'La paura del dentista è comune. Scopri come la sedazione cosciente ti permette di affrontare qualsiasi intervento senza ansia né dolore.',
      date: '2025-01-08',
      category: 'Comfort del paziente',
      readTime: '5 min',
      content: `
        <p>La <strong>paura del dentista</strong>, detta anche odontofobia, è un fenomeno molto più diffuso di quanto si pensi. Si stima che circa il 15-20% della popolazione eviti le cure dentali proprio a causa dell'ansia. Se ti riconosci in questa situazione, sappi che non sei solo — e soprattutto che oggi esistono soluzioni concrete.</p>

        <h2>Cos'è la sedazione cosciente?</h2>
        <p>La sedazione cosciente è una tecnica anestesiologica che permette al paziente di rimanere sveglio e collaborante, ma in uno stato di profondo rilassamento. Non si tratta di anestesia totale: il paziente respira autonomamente, può comunicare con il medico, ma avverte una sensazione di benessere e distacco che elimina ansia e percezione del dolore.</p>

        <h2>Come funziona in pratica?</h2>
        <p>Presso il Centro Odontoiatrico Smiledoc a Monterotondo, la sedazione cosciente viene somministrata per via endovenosa da un <strong>medico anestesista professionista</strong> presente in studio per tutta la durata dell'intervento. Il protocollo prevede:</p>
        <ol>
          <li>Colloquio preliminare con l'anestesista per valutare lo stato di salute</li>
          <li>Monitoraggio continuo dei parametri vitali durante tutta la seduta</li>
          <li>Somministrazione graduale del sedativo per via endovenosa</li>
          <li>Intervento in condizioni di massimo comfort</li>
          <li>Risveglio sereno e progressivo al termine della seduta</li>
        </ol>

        <h2>Per chi è indicata?</h2>
        <p>La sedazione cosciente è particolarmente utile per:</p>
        <ul>
          <li>Pazienti con <strong>odontofobia</strong> (paura del dentista)</li>
          <li>Interventi lunghi o complessi (come le riabilitazioni implantari complete)</li>
          <li>Pazienti con un forte <strong>riflesso del vomito</strong></li>
          <li>Persone che soffrono di <strong>ansia generale</strong></li>
          <li>Chi desidera semplicemente vivere l'esperienza in totale rilassamento</li>
        </ul>

        <h2>È sicura?</h2>
        <p>La sedazione cosciente è una procedura estremamente sicura quando eseguita da un anestesista qualificato. I farmaci utilizzati hanno un profilo di sicurezza elevato e gli effetti sono completamente reversibili. Il monitoraggio costante dei parametri vitali garantisce il massimo livello di controllo durante l'intera seduta.</p>

        <h2>L'impegno di Smiledoc per il comfort del paziente</h2>
        <p>Il Dott. Civero ha scelto di integrare la sedazione cosciente nella pratica quotidiana dello studio perché crede che <strong>nessuno debba rinunciare alla salute della propria bocca a causa della paura</strong>. La presenza costante di un anestesista durante gli interventi di implantologia è una delle caratteristiche distintive dello studio Smiledoc a Monterotondo.</p>
      `,
    },
    {
      slug: 'impianti-dentali-poco-osso',
      title: 'Poco osso per gli impianti? Le soluzioni esistono',
      metaTitle: 'Impianti con Poco Osso: Le Soluzioni | Smiledoc Monterotondo',
      metaDescription: 'Ti hanno detto che non hai abbastanza osso per gli impianti? Scopri le tecniche moderne che rendono possibile l\'implantologia anche con poco osso. Smiledoc.',
      excerpt: 'Ti hanno detto che non c\'è abbastanza osso? Le tecniche moderne consentono di inserire impianti anche in condizioni di osso ridotto.',
      date: '2025-01-05',
      category: 'Implantologia',
      readTime: '6 min',
      content: `
        <p>Una delle frasi che i pazienti riportano più spesso è: <em>"Mi hanno detto che non ho abbastanza osso per fare gli impianti."</em> Se anche tu hai ricevuto questa risposta, non considerarla una sentenza definitiva. Le tecniche di implantologia moderna offrono <strong>soluzioni efficaci</strong> anche quando la quantità di osso disponibile è limitata.</p>

        <h2>Perché l'osso si riduce?</h2>
        <p>Dopo la perdita di un dente, l'osso che lo sosteneva inizia un processo naturale di riassorbimento. Più tempo passa, più l'osso si riduce in altezza e spessore. Questo fenomeno si verifica per:</p>
        <ul>
          <li>Estrazioni non seguite da riabilitazione</li>
          <li>Uso prolungato di protesi mobili (dentiere)</li>
          <li>Malattia parodontale avanzata</li>
          <li>Fattori anatomici individuali</li>
        </ul>
        <p>Ecco perché è importante <strong>non rimandare</strong> la sostituzione di un dente mancante: prima si interviene, maggiori sono le opzioni disponibili.</p>

        <h2>Le tecniche per fare impianti con poco osso</h2>

        <h3>Rialzo del seno mascellare (sinus lift)</h3>
        <p>Quando manca osso nella zona posteriore dell'arcata superiore, è possibile eseguire un rialzo del pavimento del seno mascellare. Attraverso una piccola apertura, il chirurgo solleva delicatamente la membrana del seno e inserisce materiale da innesto osseo che, nei mesi successivi, viene integrato dall'organismo creando nuovo osso sufficiente per gli impianti.</p>

        <h3>Innesto osseo (rigenerazione guidata)</h3>
        <p>Per carenze ossee localizzate, si può ricorrere a innesti ossei. Il materiale utilizzato può essere osso autologo (prelevato dal paziente stesso), osso di banca o biomateriali sintetici. L'innesto viene protetto da membrane riassorbibili che guidano la formazione di nuovo osso.</p>

        <h3>Impianti corti o inclinati</h3>
        <p>Le moderne soluzioni implantologiche includono impianti di dimensioni ridotte o posizionati con angolazioni specifiche per sfruttare al meglio l'osso disponibile. Tecniche come All-on-4 sono state sviluppate proprio per consentire riabilitazioni complete anche con quantità di osso ridotta.</p>

        <h3>Impianti zigomatici</h3>
        <p>Nei casi più estremi di atrofia mascellare, esistono impianti speciali che si ancorano all'osso zigomatico (lo zigomo), molto più denso e resistente al riassorbimento. Questa soluzione elimina la necessità di innesti ossei anche nei casi più complessi.</p>

        <h2>L'esperienza del Dott. Civero con i casi complessi</h2>
        <p>Il Dott. Piernatale Civero ha dedicato gran parte della sua carriera alla risoluzione dei casi complessi. Presso Smiledoc a <strong>Monterotondo</strong>, molti pazienti che avevano ricevuto un rifiuto altrove hanno trovato la soluzione ai loro problemi. La combinazione di diagnostica avanzata (TAC 3D), esperienza chirurgica e conoscenza delle tecniche più moderne consente di affrontare anche le situazioni più difficili.</p>

        <h2>Il primo passo: la valutazione diagnostica</h2>
        <p>Ogni caso è diverso e merita una valutazione accurata. Solo attraverso una visita approfondita con esami radiografici specifici è possibile determinare la soluzione più adatta alla tua situazione. Non lasciare che un "no" del passato ti impedisca di esplorare le possibilità che la moderna implantologia offre.</p>
      `,
    },
    {
      slug: 'dentiera-mobile-vs-impianti-fissi',
      title: 'Dentiera mobile vs impianti fissi: confronto completo',
      metaTitle: 'Dentiera Mobile vs Impianti Fissi: Confronto | Smiledoc',
      metaDescription: 'Dentiera mobile o impianti fissi? Confronto completo su comfort, durata, costi e qualità della vita. Scopri la soluzione più adatta a te a Monterotondo.',
      excerpt: 'Stai valutando se passare dalla dentiera agli impianti fissi? Ecco un confronto onesto tra le due soluzioni per aiutarti a scegliere.',
      date: '2025-01-02',
      category: 'Implantologia',
      readTime: '8 min',
      content: `
        <p>Se usi una <strong>protesi mobile</strong> (dentiera) o stai per perdere i denti e devi scegliere tra dentiera e impianti, questo articolo ti offre un confronto chiaro e completo tra le due opzioni. Conoscere vantaggi e limiti di ciascuna soluzione ti aiuterà a prendere la decisione più adatta alla tua salute e il tuo benessere.</p>

        <h2>La dentiera mobile: vantaggi e limiti</h2>

        <h3>Vantaggi</h3>
        <ul>
          <li>Costo iniziale inferiore rispetto agli impianti</li>
          <li>Non richiede intervento chirurgico</li>
          <li>Realizzabile in tempi relativamente brevi</li>
        </ul>

        <h3>Limiti</h3>
        <ul>
          <li><strong>Instabilità:</strong> la dentiera si muove durante la masticazione e il parlato</li>
          <li><strong>Comfort ridotto:</strong> copre il palato, alterando il gusto e creando fastidio</li>
          <li><strong>Riassorbimento osseo:</strong> la pressione della dentiera sull'osso ne accelera il riassorbimento</li>
          <li><strong>Manutenzione frequente:</strong> necessita di ribasature periodiche per adattarsi all'osso che cambia</li>
          <li><strong>Impatto psicologico:</strong> la paura che si muova o cada genera ansia nelle situazioni sociali</li>
          <li><strong>Limitazioni alimentari:</strong> molti cibi duri o fibrosi diventano difficili o impossibili da masticare</li>
        </ul>

        <h2>Gli impianti fissi: vantaggi e considerazioni</h2>

        <h3>Vantaggi</h3>
        <ul>
          <li><strong>Stabilità totale:</strong> gli impianti sono saldamente integrati nell'osso</li>
          <li><strong>Funzionalità naturale:</strong> masticazione e fonazione identiche ai denti naturali</li>
          <li><strong>Preservazione dell'osso:</strong> gli impianti stimolano l'osso, prevenendo il riassorbimento</li>
          <li><strong>Estetica superiore:</strong> risultato visivamente indistinguibile dai denti naturali</li>
          <li><strong>Durata:</strong> con la giusta manutenzione, gli impianti possono durare decenni</li>
          <li><strong>Qualità della vita:</strong> nessuna limitazione alimentare, sociale o funzionale</li>
        </ul>

        <h3>Considerazioni</h3>
        <ul>
          <li>Investimento iniziale più elevato</li>
          <li>Richiede un intervento chirurgico</li>
          <li>Necessita di sufficiente osso (risolvibile con tecniche di rigenerazione)</li>
        </ul>

        <h2>Il confronto in sintesi</h2>
        <p>La dentiera è una soluzione accessibile ma temporanea, che nel lungo periodo comporta costi aggiuntivi e un progressivo peggioramento del comfort. Gli impianti rappresentano un investimento nella propria salute che si ripaga nel tempo con una qualità della vita incomparabilmente superiore.</p>

        <h2>Da dentiera a impianti: è possibile?</h2>
        <p>Molti pazienti che oggi portano una dentiera si chiedono se possono passare agli impianti fissi. La risposta, nella maggior parte dei casi, è <strong>sì</strong>. Anche dopo anni di utilizzo della dentiera, le tecniche moderne consentono di realizzare una riabilitazione implantare. Il Dott. Civero presso Smiledoc a Monterotondo ha aiutato centinaia di pazienti in questa transizione, restituendo loro il piacere di sorridere e mangiare senza pensieri.</p>
      `,
    },
    {
      slug: 'quanto-durano-impianti-dentali',
      title: 'Quanto durano gli impianti dentali? Tutto sulla durata e manutenzione',
      metaTitle: 'Quanto Durano gli Impianti Dentali? Guida Completa | Smiledoc',
      metaDescription: 'Scopri quanto durano gli impianti dentali, cosa influenza la loro longevità e come mantenerli nel tempo. Garanzia 10 anni presso Smiledoc Monterotondo.',
      excerpt: 'Un impianto dentale può durare tutta la vita? Scopri i fattori che influenzano la durata e come prenderti cura dei tuoi impianti.',
      date: '2024-12-28',
      category: 'Manutenzione',
      readTime: '5 min',
      content: `
        <p>Una delle domande più frequenti che i pazienti rivolgono al Dott. Civero è: <em>"Quanto dureranno i miei nuovi impianti?"</em> La risposta è incoraggiante: un impianto dentale ben posizionato e correttamente mantenuto può durare <strong>oltre 20 anni</strong>, e in molti casi accompagna il paziente per tutta la vita.</p>

        <h2>Cosa determina la durata di un impianto?</h2>

        <h3>La qualità dell'intervento</h3>
        <p>Il fattore più importante è la <strong>qualità dell'impianto</strong> e la <strong>competenza del chirurgo</strong> che lo posiziona. Un posizionamento preciso, una corretta valutazione dell'osso e un protocollo chirurgico rigoroso sono le fondamenta di un impianto destinato a durare nel tempo.</p>

        <h3>L'igiene orale quotidiana</h3>
        <p>Anche un impianto di eccellente qualità può fallire se l'igiene orale non è adeguata. Come i denti naturali, anche gli impianti possono essere colpiti da infiammazione dei tessuti circostanti (perimplantite). Spazzolino, filo interdentale e scovolino sono alleati indispensabili.</p>

        <h3>I controlli periodici</h3>
        <p>Visite di controllo regolari (generalmente ogni 6 mesi) permettono di monitorare lo stato degli impianti, effettuare sedute di igiene professionale e intervenire tempestivamente in caso di problemi.</p>

        <h3>Le abitudini del paziente</h3>
        <p>Il fumo è il nemico principale degli impianti dentali. I fumatori hanno un rischio significativamente maggiore di perdita dell'impianto. Anche il bruxismo (digrignamento dei denti) può rappresentare un fattore di rischio se non gestito con un bite notturno.</p>

        <h2>Impianto vs corona: durate diverse</h2>
        <p>È importante distinguere tra l'impianto (la vite nell'osso) e la corona protesica (il dente visibile). L'impianto in titanio, una volta osteointegrato, è estremamente durevole. La corona protesica, sottoposta all'usura della masticazione quotidiana, potrebbe necessitare di sostituzione dopo 10-15 anni, a seconda del materiale e dell'uso.</p>

        <h2>La garanzia Smiledoc</h2>
        <p>Presso il Centro Odontoiatrico Smiledoc a Monterotondo, ogni protesi su impianti è coperta dalla <strong>garanzia "Sorriso Perfetto" di 10 anni</strong>. Se la corona si scheggia o presenta difetti durante questo periodo, e il paziente ha mantenuto i controlli periodici stabiliti, lo studio interviene senza costi aggiuntivi per la riparazione o la sostituzione.</p>

        <h2>Come mantenere i tuoi impianti</h2>
        <ul>
          <li>Spazzola i denti almeno 2 volte al giorno con spazzolino morbido</li>
          <li>Usa lo scovolino interdentale quotidianamente</li>
          <li>Non saltare le visite di controllo semestrali</li>
          <li>Esegui sedute di igiene professionale regolari</li>
          <li>Evita di masticare oggetti duri (ghiaccio, penne, noccioli)</li>
          <li>Se soffri di bruxismo, usa il bite notturno prescritto</li>
        </ul>
      `,
    },
    {
      slug: 'impianti-dentali-diabete',
      title: 'Impianti dentali e diabete: si possono fare?',
      metaTitle: 'Impianti Dentali e Diabete: Si Può Fare? | Smiledoc Monterotondo',
      metaDescription: 'Soffri di diabete e hai bisogno di impianti dentali? Scopri quando è possibile e quali precauzioni adottare. Centro Smiledoc Monterotondo.',
      excerpt: 'Diabete e implantologia: scopri quando è possibile inserire impianti dentali e quali precauzioni sono necessarie per chi soffre di diabete.',
      date: '2024-12-22',
      category: 'Salute e implantologia',
      readTime: '5 min',
      content: `
        <p>Il diabete è una delle condizioni più diffuse nella popolazione e molti pazienti diabetici si chiedono se possono sottoporsi a un intervento di implantologia. La risposta, nella maggior parte dei casi, è <strong>positiva</strong>, a condizione che vengano rispettate alcune precauzioni fondamentali.</p>

        <h2>Il diabete influisce sugli impianti dentali?</h2>
        <p>Il diabete, in particolare quando non ben controllato, può influenzare il processo di guarigione e osteointegrazione. I livelli elevati di glucosio nel sangue possono:</p>
        <ul>
          <li>Rallentare la guarigione dei tessuti</li>
          <li>Aumentare il rischio di infezioni post-operatorie</li>
          <li>Ridurre la risposta immunitaria locale</li>
          <li>Interferire con il processo di osteointegrazione</li>
        </ul>
        <p>Tuttavia, studi scientifici recenti dimostrano che <strong>i pazienti diabetici con un buon controllo glicemico</strong> (emoglobina glicata HbA1c inferiore al 7-8%) hanno tassi di successo implantare molto vicini a quelli dei pazienti non diabetici.</p>

        <h2>Quando si possono fare gli impianti?</h2>
        <p>L'implantologia è possibile quando:</p>
        <ul>
          <li>Il diabete è <strong>ben compensato</strong> e sotto controllo medico</li>
          <li>L'emoglobina glicata è nei valori accettabili</li>
          <li>Non ci sono complicanze gravi in atto (nefropatia avanzata, vasculopatia severa)</li>
          <li>Il paziente segue regolarmente la terapia prescritta</li>
        </ul>

        <h2>Precauzioni specifiche</h2>
        <p>Per i pazienti diabetici, il protocollo di Smiledoc prevede:</p>
        <ul>
          <li><strong>Valutazione multidisciplinare:</strong> collaborazione con il diabetologo del paziente</li>
          <li><strong>Esami ematici pre-operatori</strong> mirati (glicemia, HbA1c, emocromo)</li>
          <li><strong>Profilassi antibiotica</strong> personalizzata</li>
          <li><strong>Programmazione dell'intervento</strong> nelle ore in cui il controllo glicemico è ottimale</li>
          <li><strong>Monitoraggio post-operatorio</strong> più ravvicinato</li>
        </ul>

        <h2>L'approccio di Smiledoc</h2>
        <p>Il Dott. Civero tratta regolarmente pazienti diabetici presso il Centro Smiledoc di <strong>Monterotondo</strong>. La lunga esperienza e l'attenzione alla singolarità di ogni caso clinico permettono di gestire anche le situazioni più delicate con la massima sicurezza. La chiave è una <strong>pianificazione accurata</strong> e un <strong>monitoraggio attento</strong> in tutte le fasi del trattamento.</p>

        <h2>Non rinunciare al tuo sorriso</h2>
        <p>Se soffri di diabete e hai bisogno di impianti dentali, il primo passo è una visita diagnostica. Il Dott. Civero valuterà la tua situazione complessiva e ti indicherà il percorso più sicuro e adatto alle tue esigenze.</p>
      `,
    },
    {
      slug: 'all-on-4-all-on-6-arcata-completa',
      title: 'All-on-4 e All-on-6: riabilitazione completa dell\'arcata',
      metaTitle: 'All-on-4 e All-on-6: Arcata Completa su Impianti | Smiledoc',
      metaDescription: 'All-on-4 e All-on-6: scopri come riavere un\'intera arcata di denti fissi con soli 4 o 6 impianti. Tecniche avanzate presso Smiledoc Monterotondo.',
      excerpt: 'Denti fissi su tutta l\'arcata con soli 4 o 6 impianti: scopri le tecniche All-on-4 e All-on-6 e come Smiledoc le applica.',
      date: '2024-12-18',
      category: 'Implantologia',
      readTime: '7 min',
      content: `
        <p>Per chi ha perso tutti o quasi tutti i denti di un'arcata, le tecniche <strong>All-on-4</strong> e <strong>All-on-6</strong> rappresentano una delle più importanti innovazioni dell'implantologia moderna. Consentono di riabilitare un'intera arcata dentale (superiore o inferiore) con un numero limitato di impianti, spesso con la possibilità di carico immediato.</p>

        <h2>Come funziona l'All-on-4?</h2>
        <p>La tecnica All-on-4, sviluppata dal Prof. Paulo Maló, prevede il posizionamento di <strong>4 impianti</strong> in punti strategici dell'arcata:</p>
        <ul>
          <li>2 impianti anteriori posizionati verticalmente</li>
          <li>2 impianti posteriori posizionati inclinati (fino a 45°)</li>
        </ul>
        <p>L'inclinazione degli impianti posteriori consente di sfruttare l'osso disponibile nella zona anteriore (solitamente più spesso), evitando in molti casi la necessità di innesti ossei. Su questi 4 impianti viene fissata una protesi con 10-12 denti.</p>

        <h2>Quando si sceglie l'All-on-6?</h2>
        <p>L'All-on-6 aggiunge 2 impianti (per un totale di 6), offrendo:</p>
        <ul>
          <li>Maggiore distribuzione del carico masticatorio</li>
          <li>Possibilità di protesi più estese</li>
          <li>Indicazione in arcate con più osso disponibile</li>
          <li>Maggiore sicurezza biomeccanica in pazienti con masticazione forte</li>
        </ul>
        <p>La scelta tra All-on-4 e All-on-6 dipende dalla situazione anatomica del paziente e viene determinata durante la fase diagnostica.</p>

        <h2>I vantaggi rispetto alla dentiera</h2>
        <ul>
          <li><strong>Stabilità assoluta:</strong> i denti sono fissi e non si muovono</li>
          <li><strong>Masticazione naturale:</strong> puoi mangiare qualsiasi cibo</li>
          <li><strong>Niente palato coperto:</strong> gusto e sensazioni naturali</li>
          <li><strong>Stop al riassorbimento osseo:</strong> gli impianti preservano l'osso</li>
          <li><strong>Estetica:</strong> risultato naturale e armonioso</li>
        </ul>

        <h2>Il protocollo Smiledoc per All-on-4 e All-on-6</h2>
        <p>Presso il Centro Smiledoc di <strong>Monterotondo</strong>, il Dott. Civero esegue riabilitazioni All-on-4 e All-on-6 con un protocollo completo:</p>
        <ol>
          <li><strong>Diagnostica digitale</strong> con TAC 3D e scansione intraorale</li>
          <li><strong>Pianificazione chirurgica computerizzata</strong></li>
          <li><strong>Intervento in sedazione cosciente</strong> per il massimo comfort</li>
          <li><strong>Carico immediato</strong> quando le condizioni cliniche lo consentono</li>
          <li><strong>Protesi definitiva</strong> dopo il completamento dell'osteointegrazione</li>
        </ol>
        <p>Il laboratorio odontotecnico interno consente tempi rapidi e un controllo qualitativo diretto su ogni fase della realizzazione protesica.</p>

        <h2>Per chi è indicata questa soluzione?</h2>
        <p>Le tecniche All-on-4 e All-on-6 sono ideali per pazienti che:</p>
        <ul>
          <li>Hanno perso tutti o la maggior parte dei denti</li>
          <li>Portano una dentiera e vogliono passare a denti fissi</li>
          <li>Hanno osso ridotto nella zona posteriore</li>
          <li>Cercano una soluzione definitiva in tempi contenuti</li>
        </ul>
      `,
    },
    {
      slug: 'impianti-dentali-guidonia-mentana-fonte-nuova',
      title: 'Impianti dentali a Guidonia, Mentana e Fonte Nuova: perché scegliere Smiledoc',
      metaTitle: 'Impianti Dentali Guidonia, Mentana, Fonte Nuova | Smiledoc',
      metaDescription: 'Cerchi un centro per impianti dentali a Guidonia, Mentana o Fonte Nuova? Smiledoc a Monterotondo è il punto di riferimento per l\'implantologia nella zona.',
      excerpt: 'Vivi a Guidonia, Mentana o Fonte Nuova e cerchi un centro specializzato in impianti dentali? Scopri perché Smiledoc è il riferimento della zona.',
      date: '2024-12-15',
      category: 'Lo studio',
      readTime: '4 min',
      content: `
        <p>Se vivi a <strong>Guidonia Montecelio</strong>, <strong>Mentana</strong>, <strong>Fonte Nuova</strong> o in uno dei comuni della zona nord-est di Roma e hai bisogno di impianti dentali, il Centro Odontoiatrico Smiledoc a Monterotondo si trova a pochi minuti da casa tua.</p>

        <h2>Una posizione strategica</h2>
        <p>Il Centro Smiledoc si trova in Via Monte Circeo 12 a Monterotondo, una posizione facilmente raggiungibile da tutti i comuni limitrofi:</p>
        <ul>
          <li><strong>Da Mentana:</strong> circa 10 minuti in auto</li>
          <li><strong>Da Fonte Nuova:</strong> circa 15 minuti in auto</li>
          <li><strong>Da Guidonia:</strong> circa 15-20 minuti in auto</li>
          <li><strong>Da Palombara Sabina:</strong> circa 20 minuti in auto</li>
          <li><strong>Da Fiano Romano:</strong> circa 15 minuti in auto</li>
          <li><strong>Da Capena:</strong> circa 10 minuti in auto</li>
        </ul>
        <p>Lo studio è inoltre ben collegato con la stazione ferroviaria di Monterotondo-Mentana, raggiungibile con il treno regionale da Roma.</p>

        <h2>Perché venire a Smiledoc per i tuoi impianti?</h2>

        <h3>Esperienza consolidata</h3>
        <p>Il Dott. Piernatale Civero opera nel campo dell'implantologia da oltre 25 anni, con più di 5.000 impianti inseriti. Questa esperienza si traduce in sicurezza e risultati predicibili per ogni paziente.</p>

        <h3>Tecnologia di ultima generazione</h3>
        <p>Lo studio è dotato di TAC Cone Beam per diagnostica 3D, scanner intraorale digitale e sistema di pianificazione chirurgica computerizzata. Strumenti che consentono interventi più precisi e meno invasivi.</p>

        <h3>Sedazione cosciente</h3>
        <p>La presenza di un anestesista professionista durante gli interventi permette di vivere l'esperienza in totale serenità, superando qualsiasi paura legata alla poltrona del dentista.</p>

        <h3>Tutto in un unico centro</h3>
        <p>Dalla diagnosi alla protesi definitiva, tutto avviene all'interno dello stesso studio. Il laboratorio odontotecnico integrato elimina i tempi di attesa e garantisce un controllo qualitativo diretto.</p>

        <h3>Garanzia 10 anni</h3>
        <p>Ogni protesi su impianti realizzata presso Smiledoc è coperta dalla garanzia "Sorriso Perfetto" di 10 anni.</p>

        <h2>La fiducia della comunità locale</h2>
        <p>Smiledoc è il punto di riferimento per la salute orale di migliaia di famiglie di Monterotondo e dei comuni limitrofi. La fiducia costruita in oltre due decenni di attività si basa su risultati concreti, trasparenza e un'attenzione autentica al benessere di ogni paziente.</p>

        <h2>Come raggiungerci</h2>
        <p><strong>Centro Odontoiatrico Smiledoc</strong><br/>
        Via Monte Circeo 12, 00015 Monterotondo (RM)<br/>
        Telefono: 0774 362 520<br/>
        Email: info@smiledoc.it</p>
      `,
    },
    {
      slug: 'cosa-mangiare-dopo-implantologia',
      title: 'Cosa mangiare dopo un intervento di implantologia',
      metaTitle: 'Cosa Mangiare Dopo Impianti Dentali | Smiledoc Monterotondo',
      metaDescription: 'Hai appena fatto un intervento di implantologia? Ecco cosa mangiare e cosa evitare nei giorni successivi per una guarigione ottimale.',
      excerpt: 'Dopo un intervento di implantologia, l\'alimentazione gioca un ruolo fondamentale nella guarigione. Ecco le indicazioni del Dott. Civero.',
      date: '2024-12-10',
      category: 'Post-intervento',
      readTime: '4 min',
      content: `
        <p>Dopo un intervento di implantologia, seguire le giuste indicazioni alimentari è fondamentale per favorire una guarigione rapida e senza complicazioni. Ecco le raccomandazioni del Dott. Civero ai pazienti del Centro Smiledoc di <strong>Monterotondo</strong>.</p>

        <h2>Le prime 24 ore</h2>
        <p>Nelle prime ore dopo l'intervento, è importante:</p>
        <ul>
          <li>Attendere che l'effetto dell'anestesia sia completamente svanito prima di mangiare</li>
          <li>Consumare solo alimenti <strong>freddi o a temperatura ambiente</strong></li>
          <li>Preferire cibi <strong>liquidi o morbidissimi</strong></li>
          <li>Evitare cibi caldi che potrebbero aumentare il sanguinamento</li>
        </ul>

        <h3>Alimenti consigliati nelle prime 24 ore</h3>
        <ul>
          <li>Yogurt naturale (non troppo freddo)</li>
          <li>Gelato alla crema (ottimo per il comfort)</li>
          <li>Frullati di frutta (senza semi)</li>
          <li>Acqua e bevande non gassate</li>
        </ul>

        <h2>Dalla seconda giornata alla prima settimana</h2>
        <p>Puoi iniziare a introdurre cibi morbidi che non richiedono masticazione impegnativa:</p>
        <ul>
          <li>Passati e vellutate di verdura (tiepidi, non bollenti)</li>
          <li>Purè di patate</li>
          <li>Uova strapazzate o in camicia</li>
          <li>Pasta molto cotta in formati piccoli</li>
          <li>Pesce al vapore o bollito</li>
          <li>Risotti cremosi</li>
          <li>Ricotta e formaggi morbidi</li>
        </ul>

        <h2>Cosa evitare</h2>
        <p>Per le prime 2-3 settimane, evita:</p>
        <ul>
          <li><strong>Cibi duri:</strong> frutta secca, croccantini, grissini</li>
          <li><strong>Cibi piccanti o acidi:</strong> possono irritare la ferita</li>
          <li><strong>Alcol:</strong> interferisce con la guarigione e con gli eventuali farmaci</li>
          <li><strong>Cibi con semi o briciole:</strong> riso soffiato, semi di sesamo, popcorn</li>
          <li><strong>Bevande bollenti:</strong> possono provocare sanguinamento</li>
          <li><strong>Masticazione sul lato operato</strong> fino a diversa indicazione</li>
        </ul>

        <h2>Dopo le prime settimane</h2>
        <p>Con il progredire della guarigione, potrai gradualmente reintrodurre tutti gli alimenti. Il Dott. Civero e il team Smiledoc ti forniranno indicazioni personalizzate durante le visite di controllo post-operatorie, valutando i tuoi progressi e adattando le raccomandazioni alla tua situazione specifica.</p>

        <h2>L'importanza della nutrizione nella guarigione</h2>
        <p>Una buona alimentazione accelera il processo di guarigione. Assicurati di:</p>
        <ul>
          <li>Mantenere un apporto proteico adeguato (favorisce la rigenerazione dei tessuti)</li>
          <li>Assumere vitamina C (supporta la guarigione delle gengive)</li>
          <li>Bere molta acqua</li>
          <li>Non saltare i pasti (il corpo ha bisogno di energia per guarire)</li>
        </ul>
      `,
    },
    {
      slug: 'prima-visita-implantologia-cosa-aspettarsi',
      title: 'La prima visita di implantologia: cosa aspettarsi',
      metaTitle: 'Prima Visita Implantologia: Cosa Aspettarsi | Smiledoc Monterotondo',
      metaDescription: 'Come si svolge la prima visita per impianti dentali? Scopri cosa aspettarti, quali esami vengono fatti e come prepararti. Smiledoc Monterotondo.',
      excerpt: 'Hai prenotato la tua prima visita per valutare gli impianti dentali? Ecco come si svolge e come prepararti al meglio.',
      date: '2024-12-05',
      category: 'Lo studio',
      readTime: '5 min',
      content: `
        <p>Il primo passo verso un nuovo sorriso è la <strong>visita diagnostica</strong>. Se hai prenotato (o stai pensando di prenotare) la tua prima visita presso il Centro Smiledoc di <strong>Monterotondo</strong>, ecco cosa aspettarti.</p>

        <h2>Come prepararsi</h2>
        <p>Per la prima visita ti consigliamo di:</p>
        <ul>
          <li>Portare eventuali <strong>radiografie recenti</strong> (panoramica, TAC)</li>
          <li>Avere un elenco dei <strong>farmaci</strong> che assumi regolarmente</li>
          <li>Segnalare eventuali <strong>patologie</strong> (diabete, patologie cardiache, osteoporosi, allergie)</li>
          <li>Portare la <strong>protesi attuale</strong> se ne usi una</li>
          <li>Annotare le tue <strong>domande e dubbi</strong> per non dimenticarli</li>
        </ul>

        <h2>Come si svolge la visita</h2>

        <h3>1. Colloquio iniziale</h3>
        <p>Il Dott. Civero dedica il tempo necessario ad ascoltare la tua storia, le tue aspettative e le tue preoccupazioni. Capire cosa desideri e cosa temi è fondamentale per costruire un percorso di cure personalizzato.</p>

        <h3>2. Esame clinico</h3>
        <p>Segue un esame accurato della bocca: stato dei denti presenti, condizione delle gengive, valutazione del morso e dell'articolazione temporo-mandibolare.</p>

        <h3>3. Esami diagnostici</h3>
        <p>Presso Smiledoc, gli esami radiografici vengono eseguiti direttamente in studio:</p>
        <ul>
          <li><strong>Radiografia panoramica (OPT):</strong> visione d'insieme di tutta la bocca</li>
          <li><strong>TAC Cone Beam 3D:</strong> immagini tridimensionali ad alta risoluzione dell'osso</li>
          <li><strong>Scansione intraorale digitale:</strong> modello 3D della tua bocca senza impronte tradizionali</li>
        </ul>
        <p>Avere tutto in sede significa avere le risposte nella stessa visita, senza dover attendere appuntamenti in centri radiologici esterni.</p>

        <h3>4. Spiegazione del piano di trattamento</h3>
        <p>Sulla base degli esami, il Dott. Civero ti illustra:</p>
        <ul>
          <li>La tua situazione attuale in modo chiaro e comprensibile</li>
          <li>Le opzioni di trattamento disponibili</li>
          <li>La soluzione che ritiene più indicata per il tuo caso</li>
          <li>Le fasi dell'intervento e i tempi previsti</li>
          <li>Il piano economico dettagliato</li>
        </ul>

        <h2>Nessun obbligo</h2>
        <p>La prima visita non comporta alcun vincolo. Riceverai tutte le informazioni di cui hai bisogno per decidere con serenità, nel tempo che ti serve. Il team Smiledoc sarà sempre disponibile per rispondere a ulteriori domande, anche dopo la visita.</p>

        <h2>Quanto dura la prima visita?</h2>
        <p>La prima visita presso Smiledoc dura mediamente <strong>45-60 minuti</strong>. Questo tempo è necessario per una valutazione completa e approfondita, senza fretta. Crediamo che dedicare il giusto tempo alla diagnosi sia la premessa di un trattamento di successo.</p>
      `,
    },
  ]

  const getArticle = (slug: string) => articles.find(a => a.slug === slug)
  const getAllArticles = () => articles
  const getLatestArticles = (count: number = 3) => articles.slice(0, count)

  return { articles, getArticle, getAllArticles, getLatestArticles }
}
