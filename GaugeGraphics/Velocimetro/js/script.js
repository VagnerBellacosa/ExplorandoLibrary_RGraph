
   new RGraph.Gauge({
        id: 'cvs',
        min: 0,
        max: 300,
        value: [260,12],
        options: {
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            marginBottom: 15,

            // Configurando o titulo principal do velocimetro
            titleTop: 'Bellacosa Bootcamps',
            titleTopSize: 13,
            titleTopFont: 'Impact',
            titleTopColor: 'white',
            titleTopSize: 15,
            titleTopItalic: true,
            
            // Configurando o subtitulo no bottom
            titleBottom: 'DIO',
            titleBottomSize: 14,
            titleBottomItalic: true,
            titleBottomFont: 'Impact',
            titleBottomColor: '#ccc',
            titleBottomPos: 0.4,

            // The rest of the configuration for the Gauge chart - the needle,
            // centerpin, tickmarks and the border
            colorsRanges: [[240,300,'rgba(255,0,0,1)'], [180,240,'rgba(255,255,0,0.95']],
            backgroundColor: 'black',
            backgroundGradient: true,
            centerpinColor: '#666',
            needleSize: [null, 50],
            needleColors: ['Gradient(transparent:white:white:white:white:white)', 'Gradient(transparent:#d66:#d66:#d66:#d66)'],
            textColor: 'white',
            tickmarksLargeColor: 'white',
            tickmarksMediumColor: 'white',
            tickmarksSmallColor: 'white',
            borderOuter: '#666',
            borderInner: '#333'
        }
    }).draw().responsive([
        {maxWidth:null,css:{'float':'right'},parentCss:{textAlign:'none','float': 'right'}},
        {maxWidth:600,css:{'float':'none'},parentCss:{textAlign:'center','float': 'none'}}
    ]);
	