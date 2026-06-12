import { useEffect, useRef } from 'react'

export default function CursorCharacter() {
  const svgRef        = useRef(null)
  const headRef       = useRef(null)
  const lpupilRef     = useRef(null)
  const rpupilRef     = useRef(null)
  const lbrowRef      = useRef(null)
  const rbrowRef      = useRef(null)
  const armLeftRef    = useRef(null)
  const armRightRef   = useRef(null)
  const floatCodeRef  = useRef(null)

  useEffect(() => {
    let targetX = 0, targetY = 0
    let currentX = 0, currentY = 0
    let pupilX = 0, pupilY = 0
    let browLift = 0
    let codeOpacity = 0
    let armAngle = 0
    let rafId

    const lerp = (a, b, t) => a + (b - a) * t

    const onMouseMove = (e) => {
      const wrap = svgRef.current?.closest('.hero-wrap')
      if (!wrap) return
      const rect = wrap.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      targetX = (e.clientX - cx) / rect.width
      targetY = (e.clientY - cy) / rect.height
    }

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.06)
      currentY = lerp(currentY, targetY, 0.06)
      pupilX   = lerp(pupilX, currentX, 0.08)
      pupilY   = lerp(pupilY, currentY, 0.08)

      // Pupils
      const maxP = 4
      lpupilRef.current?.setAttribute('cx', String(142 + pupilX * maxP))
      lpupilRef.current?.setAttribute('cy', String(152 + pupilY * maxP))
      rpupilRef.current?.setAttribute('cx', String(178 + pupilX * maxP))
      rpupilRef.current?.setAttribute('cy', String(152 + pupilY * maxP))

      // Head tilt
      headRef.current?.setAttribute(
        'transform',
        `translate(${currentX * 8},${currentY * 6})`
      )

      // Eyebrows
      browLift = lerp(browLift, -currentY * 4, 0.08)
      lbrowRef.current?.setAttribute('transform', `translate(0,${browLift})`)
      rbrowRef.current?.setAttribute('transform', `translate(0,${browLift})`)

      // Arms
      armAngle = lerp(armAngle, currentY * 12, 0.06)
      armLeftRef.current?.setAttribute('transform', `rotate(${armAngle},93,195)`)
      armRightRef.current?.setAttribute('transform', `rotate(${-armAngle},227,195)`)

      // Floating code snippet
      const nearCenter = Math.abs(currentX) < 0.3 && Math.abs(currentY) < 0.3
      codeOpacity = lerp(codeOpacity, nearCenter ? 0.9 : 0, 0.04)
      floatCodeRef.current?.setAttribute('opacity', String(codeOpacity))

      rafId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 460"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 320, height: 460, overflow: 'visible' }}
    >
      {/* Shadow */}
      <ellipse cx="160" cy="440" rx="70" ry="10" fill="rgba(79,142,247,0.10)" />

      {/* Legs */}
      <g>
        <rect x="128" y="310" width="28" height="90" rx="14" fill="#1e2435" />
        <rect x="164" y="310" width="28" height="90" rx="14" fill="#1e2435" />
        <rect x="118" y="388" width="42" height="20" rx="10" fill="#4f8ef7" />
        <rect x="162" y="388" width="42" height="20" rx="10" fill="#4f8ef7" />
      </g>

      {/* Body */}
      <rect x="112" y="190" width="96" height="130" rx="20" fill="#1e2435" />
      <path d="M145 190 L160 210 L175 190" fill="none" stroke="#4f8ef7" strokeWidth="2" strokeLinejoin="round" />
      <rect x="119" y="215" width="22" height="18" rx="4" fill="rgba(79,142,247,0.2)" stroke="rgba(79,142,247,0.4)" strokeWidth="1" />

      {/* Left arm */}
      <g ref={armLeftRef}>
        <rect x="80" y="195" width="26" height="80" rx="13" fill="#1e2435" />
        <circle cx="93" cy="282" r="13" fill="#c8a882" />
        {/* Laptop */}
        <rect x="58" y="265" width="52" height="34" rx="5" fill="#13161e" stroke="rgba(79,142,247,0.5)" strokeWidth="1.5" />
        <rect x="62" y="269" width="44" height="24" rx="3" fill="#0d0f14" />
        <line x1="66" y1="274" x2="102" y2="274" stroke="#4f8ef7" strokeWidth="1.5" opacity="0.7" />
        <line x1="66" y1="279" x2="95"  y2="279" stroke="#4f8ef7" strokeWidth="1"   opacity="0.5" />
        <line x1="66" y1="284" x2="98"  y2="284" stroke="#7eb3ff" strokeWidth="1"   opacity="0.4" />
      </g>

      {/* Right arm */}
      <g ref={armRightRef}>
        <rect x="214" y="195" width="26" height="75" rx="13" fill="#1e2435" />
        <circle cx="227" cy="277" r="13" fill="#c8a882" />
      </g>

      {/* Neck */}
      <rect x="148" y="172" width="24" height="26" rx="10" fill="#c8a882" />

      {/* Head group */}
      <g ref={headRef}>
        <ellipse cx="160" cy="148" rx="50" ry="56" fill="#c8a882" />
        {/* Hair */}
        <path d="M110 140 Q112 90 160 85 Q208 90 210 140 Q205 108 160 105 Q115 108 110 140Z" fill="#2c1810" />
        <path d="M115 130 Q118 100 160 95" fill="none" stroke="#1a0e08" strokeWidth="2.5" />
        {/* Ears */}
        <ellipse cx="110" cy="152" rx="9" ry="12" fill="#c8a882" />
        <ellipse cx="111" cy="152" rx="5" ry="8"  fill="#b8966e" />
        <ellipse cx="210" cy="152" rx="9" ry="12" fill="#c8a882" />
        <ellipse cx="209" cy="152" rx="5" ry="8"  fill="#b8966e" />

        {/* Eyes */}
        <ellipse cx="142" cy="152" rx="12" ry="11" fill="white" />
        <ellipse cx="178" cy="152" rx="12" ry="11" fill="white" />
        <circle ref={lpupilRef} cx="142" cy="152" r="6" fill="#1a1a2e" />
        <circle cx="144" cy="150" r="2" fill="white" />
        <circle ref={rpupilRef} cx="178" cy="152" r="6" fill="#1a1a2e" />
        <circle cx="180" cy="150" r="2" fill="white" />
        {/* Lashes */}
        <path d="M130 146 Q131 142 133 141" fill="none" stroke="#2c1810" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M135 143 Q136 139 138 139" fill="none" stroke="#2c1810" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M166 143 Q167 139 169 139" fill="none" stroke="#2c1810" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M172 142 Q173 138 176 138" fill="none" stroke="#2c1810" strokeWidth="1.5" strokeLinecap="round" />

        {/* Eyebrows */}
        <path ref={lbrowRef} d="M130 137 Q140 132 153 135" fill="none" stroke="#2c1810" strokeWidth="3" strokeLinecap="round" />
        <path ref={rbrowRef} d="M167 135 Q178 132 190 137" fill="none" stroke="#2c1810" strokeWidth="3" strokeLinecap="round" />

        {/* Nose */}
        <path d="M157 155 Q155 165 158 168 Q162 170 165 168 Q168 165 163 155" fill="none" stroke="#b8966e" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="160" cy="169" rx="7" ry="4" fill="#b8966e" opacity="0.5" />

        {/* Mouth */}
        <path d="M146 178 Q160 190 174 178" fill="none" stroke="#8b5e3c" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="128" cy="168" rx="10" ry="7" fill="rgba(220,100,80,0.2)" />
        <ellipse cx="192" cy="168" rx="10" ry="7" fill="rgba(220,100,80,0.2)" />

        {/* Glasses */}
        <g fill="none" stroke="rgba(79,142,247,0.9)" strokeWidth="1.8">
          <rect x="128" y="143" width="30" height="20" rx="8" />
          <rect x="163" y="143" width="30" height="20" rx="8" />
          <line x1="158" y1="153" x2="163" y2="153" />
          <line x1="128" y1="153" x2="118" y2="158" />
          <line x1="193" y1="153" x2="203" y2="158" />
        </g>
      </g>

      {/* Floating code snippet */}
      <g ref={floatCodeRef} opacity="0">
        <rect x="220" y="90" width="90" height="54" rx="6" fill="#13161e" stroke="rgba(79,142,247,0.3)" strokeWidth="1" />
        <text x="228" y="108" fontFamily="'DM Mono',monospace" fontSize="8" fill="#4f8ef7">const dev = {'{'}</text>
        <text x="228" y="120" fontFamily="'DM Mono',monospace" fontSize="8" fill="#7eb3ff">{'  '}skills: ∞</text>
        <text x="228" y="132" fontFamily="'DM Mono',monospace" fontSize="8" fill="#4f8ef7">{'}'}</text>
      </g>
    </svg>
  )
}
