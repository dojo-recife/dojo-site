export const BoxBaixa = (props) => {
    var linkDeReferencia = props.linkAtual;
    var relacionamento = props.rel;
    var mensagemNegrito = props.mensagemMaior;
    var mensagemInfo = props.mensagemMenor;

    return (
      <a
      href={linkDeReferencia}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel={relacionamento}
    >

      <h2 className={` mb-3 text-2xl font-semibold`}>
        {mensagemNegrito + ' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        </span>
      </h2>

      <p className={` m-0 max-w-[30ch] text-sm opacity-50`}>
        {mensagemInfo}
      </p>

     </a>
    )
}